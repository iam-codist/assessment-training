# C02 — reference implementation.
# Input/output: Read n and capacity, then n order sizes. Print accepted-count and remaining-capacity.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
remaining = next(it)
count = 0
for _ in range(n):
    size = next(it)
    if size > remaining:
        break
    remaining -= size
    count += 1
print(count, remaining)
