# LC1518 — reference implementation.
# Input/output: Read full bottle count and exchange rate (at least 2). Print total bottles drunk.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
full, rate = list(tokens())
total = empty = full
while empty >= rate:
    new = empty // rate
    total += new
    empty = new + empty % rate
print(total)
