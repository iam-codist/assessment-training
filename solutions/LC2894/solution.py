# LC2894 — reference implementation.
# Input/output: Read range limit n, then divisor m (the reverse of D01). Print nondivisible-sum minus divisible-sum.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
limit, divisor = list(tokens())
print(sum((-x if x % divisor == 0 else x for x in range(1, limit + 1))))
