# DP01 — reference implementation.
# Input/output: Read n from 0 through 90. Print ways to climb n steps using moves of 1 or 2 steps. There is one empty way for n=0.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
n = next(tokens())
previous = current = 1
for step in range(2, n + 1):
    previous, current = (current, previous + current)
print(current)
