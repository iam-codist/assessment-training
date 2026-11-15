"""Execute the actual SQL answers in MDX against the shared teaching dataset."""
from pathlib import Path
import json
import re
import sqlite3

root = Path(__file__).resolve().parents[1]
cases = json.loads((root / 'tests/sql-cases.json').read_text())
fixture = (root / 'practice/sql/setup.sql').read_text()
queries = {}
for file in (root / 'content/sql').rglob('*.mdx'):
    text = file.read_text()
    question_id = re.search(r'^id: "([^"]+)"', text, re.M)[1]
    question, answer = text.split('## Answer\n', 1)
    setup = re.search(r'```sql\n(.*?)\n```', question, re.S)
    answer_queries = re.findall(r'```sql\n(.*?)\n```', answer, re.S)
    query = answer_queries[0]
    queries[question_id] = query
    case = cases[question_id]
    with sqlite3.connect(':memory:') as database:
        database.executescript(setup[1] if setup else fixture)
        actual = [list(row) for row in database.execute(query)]
        assert actual == case['rows'], (question_id, actual)
        if 'followUpRows' in case:
            actual = [list(row) for row in database.execute(answer_queries[1])]
            assert actual == case['followUpRows'], (question_id, actual)
assert set(queries) == set(cases), 'Every SQL lesson needs expected rows'
# A second distinct maximum must not become the duplicate maximum.
with sqlite3.connect(':memory:') as database:
    database.executescript(fixture)
    database.execute('UPDATE employees SET salary = 45000')
    assert database.execute(queries['SQL06']).fetchall() == [(None,)]
# Filters in ON must preserve customers when there are no qualifying orders.
with sqlite3.connect(':memory:') as database:
    database.executescript(fixture)
    database.execute("UPDATE orders SET status = 'pending'")
    assert database.execute(queries['SQL10']).fetchall() == [('Mira', 0), ('Noah', 0), ('Omar', 0), ('Pia', 0)]
print(f'Passed {len(queries)} MDX answer queries and 2 edge-case checks.')
