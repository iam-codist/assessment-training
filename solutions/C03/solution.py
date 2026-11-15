# C03 — reference implementation.
# Input/output: Read q pairs of nonnegative integers. Print YES or NO for each pair.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
q = next(it)
for _ in range(q):
    a, b = (next(it), next(it))
    print('YES' if a.bit_count() == b.bit_count() else 'NO')
