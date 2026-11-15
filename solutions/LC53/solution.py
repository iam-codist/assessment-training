# LC53 — reference implementation.
# Input/output: Read positive n and n integers. Print the maximum sum of a nonempty contiguous subarray.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
best = current = a[0]
for x in a[1:]:
    current = max(x, current + x)
    best = max(best, current)
print(best)
