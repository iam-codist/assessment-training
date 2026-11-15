# LC1608 — reference implementation.
# Input/output: Read n and n nonnegative integers. Print x if exactly x elements are at least x, otherwise -1.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = sorted((next(it) for _ in range(n)))
answer = -1
for x in range(1, n + 1):
    if a[n - x] >= x and (n == x or a[n - x - 1] < x):
        answer = x
        break
print(answer)
