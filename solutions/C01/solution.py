# C01 — reference implementation.
# Input/output: Read n, followed by n integers. Print the longest strictly increasing contiguous length.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
best = current = 1
for i in range(1, n):
    current = current + 1 if a[i] > a[i - 1] else 1
    best = max(best, current)
print(best)
