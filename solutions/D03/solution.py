# D03 — reference implementation.
# Input/output: Read a line of lowercase English letters. Print the number of distinct letters.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
print(len(set(line())))
