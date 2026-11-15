# LC209 — reference implementation.
# Input/output: Read n and a positive target, then n positive integers. Print the shortest window with sum at least target, or 0.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
target = next(it)
a = [next(it) for _ in range(n)]
left = total = 0
best = n + 1
for right, x in enumerate(a):
    total += x
    while total >= target:
        best = min(best, right - left + 1)
        total -= a[left]
        left += 1
print(0 if best == n + 1 else best)
