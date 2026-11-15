# LC242 — reference implementation.
# Input/output: Read two lowercase English strings, one per line. Print true or false for anagrams.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
a = line()
b = line()
count = [0] * 26
for c in a:
    count[ord(c) - 97] += 1
for c in b:
    count[ord(c) - 97] -= 1
print(str(all((x == 0 for x in count))).lower())
