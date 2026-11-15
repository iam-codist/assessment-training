# F01 — reference implementation.
# Input/output: Read positive n and k (1 through n), then n integers. Print the maximum sum over exactly k consecutive elements.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
k = next(it)
a = [next(it) for _ in range(n)]
window = sum(a[:k])
best = window
for r in range(k, n):
    window += a[r] - a[r - k]
    best = max(best, window)
print(best)
