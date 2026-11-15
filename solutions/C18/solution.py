# C18 — reference implementation.
# Input/output: Read n, then n coordinate pairs. Print total Manhattan distance including the return to the origin.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
x = y = distance = 0
for _ in range(n):
    nx, ny = (next(it), next(it))
    distance += abs(nx - x) + abs(ny - y)
    x, y = (nx, ny)
print(distance + abs(x) + abs(y))
