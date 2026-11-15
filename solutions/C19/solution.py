# C19 — reference implementation.
# Input/output: Read n and n integers. Print second-distinct-maximum and frequency, or NONE.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
values = sorted(set(a))
if len(values) < 2:
    print('NONE')
else:
    second = values[-2]
    print(second, a.count(second))
