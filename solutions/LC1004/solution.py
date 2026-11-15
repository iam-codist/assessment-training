# LC1004 — reference implementation.
# Input/output: Read n and nonnegative k, then n binary values. Print the longest window with at most k zeros.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
k = next(it)
a = [next(it) for _ in range(n)]
left = zeros = best = 0
for right, x in enumerate(a):
    zeros += x == 0
    while zeros > k:
        zeros -= a[left] == 0
        left += 1
    best = max(best, right - left + 1)
print(best)
