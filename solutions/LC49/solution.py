# LC49 — reference implementation.
# Input/output: Read n, then n lowercase English words, one per line (a word may be empty). Print groups as JSON arrays, ordered by sorted-letter key; retain input order inside each group.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
import json
n = int(line())
groups = {}
for _ in range(n):
    word = line()
    key = ''.join(sorted(word))
    groups.setdefault(key, []).append(word)
for key in sorted(groups):
    print(json.dumps(groups[key], separators=(',', ':')))
