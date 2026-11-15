# C20 — reference implementation.
# Input/output: Read two digit strings on separate lines. Print MATCH or DIFFERENT; leading zeros count.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
a = line()
b = line()
count = [0] * 10
for c in a:
    count[ord(c) - 48] += 1
for c in b:
    count[ord(c) - 48] -= 1
print('MATCH' if all((x == 0 for x in count)) else 'DIFFERENT')
