# C09 — reference implementation.
# Input/output: Read base1 numeral1, then base2 numeral2. Print LESS, EQUAL or GREATER. Values fit signed 64-bit.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys
a, b, c, d = sys.stdin.read().split()
x = int(b, int(a))
y = int(d, int(c))
print('LESS' if x < y else 'GREATER' if x > y else 'EQUAL')
