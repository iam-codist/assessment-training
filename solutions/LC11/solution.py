# LC11 — reference implementation.
# Input/output: Read n (at least 2), then n nonnegative heights. Print maximum container area.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
left = 0
right = n - 1
best = 0
while left < right:
    best = max(best, (right - left) * min(a[left], a[right]))
    if a[left] < a[right]:
        left += 1
    else:
        right -= 1
print(best)
