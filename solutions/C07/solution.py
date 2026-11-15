# C07 — reference implementation.
# Input/output: Read n and n integers. Print the absolute difference of sums at even and odd indices.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
balance = 0
for i in range(n):
    balance += next(it) * (1 if i % 2 == 0 else -1)
print(abs(balance))
