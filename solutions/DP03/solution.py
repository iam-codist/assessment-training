# DP03 — reference implementation.
# Input/output: Read two ASCII strings on separate lines, at most 1000 characters each. Print the longest common subsequence length.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
a = line()
b = line()
previous = [0] * (len(b) + 1)
for x in a:
    current = [0] * (len(b) + 1)
    for j, y in enumerate(b, 1):
        current[j] = previous[j - 1] + 1 if x == y else max(previous[j], current[j - 1])
    previous = current
print(previous[-1])
