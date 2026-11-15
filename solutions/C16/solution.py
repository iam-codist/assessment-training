# C16 — reference implementation.
# Input/output: Read r and c, then r rows of c integers. Print the earliest best-row index and row sum.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
r = next(it)
c = next(it)
best = None
index = 0
for i in range(r):
    total = sum((next(it) for _ in range(c)))
    if best is None or total > best:
        best = total
        index = i
print(index, best)
