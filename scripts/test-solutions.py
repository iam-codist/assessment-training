"""Compile every published reference and run shared examples in all four languages."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import json
import os
import shutil
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / 'solutions/index.json').read_text())
CASES = json.loads((ROOT / 'tests/solutions/cases.json').read_text())


def execute(command, *, input=None, cwd=None, timeout=30):
    result = subprocess.run(command, input=input, text=True, capture_output=True,
                            cwd=cwd, timeout=timeout)
    if result.returncode:
        raise AssertionError(f'{command[0]} failed:\n{result.stderr}\n{result.stdout}')
    return result.stdout.replace('\r\n', '\n').rstrip('\n')


def check_problem(problem_id):
    spec = MANIFEST[problem_id]
    cases = CASES[problem_id]
    assert cases, f'{problem_id} needs examples'
    assert set(spec['files']) == {'C', 'C++', 'Python', 'Java'}
    checks = 0
    with tempfile.TemporaryDirectory(prefix=f'assessment-{problem_id}-') as folder:
        work = Path(folder)
        for language, filename in spec['files'].items():
            source = ROOT / filename
            if language in ('C', 'C++'):
                compiler = os.environ.get('CC' if language == 'C' else 'CXX',
                                          'cc' if language == 'C' else 'c++')
                executable = work / ('program-c' if language == 'C' else 'program-cpp')
                standard = '-std=c17' if language == 'C' else '-std=c++17'
                execute([compiler, standard, '-O2', '-Wall', '-Wextra', '-Werror',
                         str(source), '-o', str(executable)])
                command = [str(executable)]
            elif language == 'Java':
                execute(['javac', '--release', '17', '-d', str(work), str(source)])
                command = ['java', '-cp', str(work), 'Main']
            else:
                command = [sys.executable, str(source)]
            for index, case in enumerate(cases, 1):
                actual = execute(command, input=case['input'], timeout=5)
                expected = case['output'].rstrip('\n')
                assert actual == expected, (f'{problem_id} {language} case {index}: '
                                            f'expected {expected!r}, got {actual!r}')
                checks += 1
    return checks


if __name__ == '__main__':
    selected = sys.argv[1:] or list(MANIFEST)
    catalog = json.loads((ROOT / 'catalog.json').read_text())
    assert {q['id'] for q in catalog['questions'] if q['category'] == 'coding'} <= set(MANIFEST), 'A coding lesson is missing language solutions'
    count = 0
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(check_problem, key): key for key in selected}
        for future in as_completed(futures):
            key = futures[future]
            try:
                count += future.result()
            except Exception as exc:
                raise AssertionError(f'{key}: {exc}') from exc
    print(f'Passed {count} shared cases across {len(selected) * 4} reference programs.')
