# C05 — reference implementation.
# Input/output: Read n and target, then n integers. Print value and zero-based index; keep the earliest tie.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
target = next(it)
a = [next(it) for _ in range(n)]
best = 0
for i in range(1, n):
    if abs(a[i] - target) < abs(a[best] - target):
        best = i
print(a[best], best)
