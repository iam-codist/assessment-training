# C11 — reference implementation.
# Input/output: Read a nonempty digit string. Print its weighted checksum modulo 10.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
total = 0
for i, c in enumerate(s):
    total = (total + int(c) * (3 if i % 2 == 0 else 1)) % 10
print(total)
