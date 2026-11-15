# C06 — reference implementation.
# Input/output: Read L R a b. Print the sum of numbers divisible by exactly one divisor.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
l, r, a, b = list(tokens())
print(sum((x for x in range(l, r + 1) if (x % a == 0) != (x % b == 0))))
