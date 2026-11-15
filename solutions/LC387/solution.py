# LC387 — reference implementation.
# Input/output: Read a lowercase English string. Print the zero-based index of its first unique character, or -1.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
counts = [0] * 26
for c in s:
    counts[ord(c) - 97] += 1
print(next((i for i, c in enumerate(s) if counts[ord(c) - 97] == 1), -1))
