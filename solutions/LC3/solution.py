# LC3 — reference implementation.
# Input/output: Read one ASCII text line. Print the length of the longest substring without a repeated character.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
last = {}
left = best = 0
for right, c in enumerate(s):
    left = max(left, last.get(c, -1) + 1)
    last[c] = right
    best = max(best, right - left + 1)
print(best)
