# C08 — reference implementation.
# Input/output: Read n and budget, then n prices. Print minimum-total and change, or IMPOSSIBLE.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
budget = next(it)
a = sorted((next(it) for _ in range(n)))
if n < 3 or sum(a[:3]) > budget:
    print('IMPOSSIBLE')
else:
    print(sum(a[:3]), budget - sum(a[:3]))
