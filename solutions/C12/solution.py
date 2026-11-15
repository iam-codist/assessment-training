# C12 — reference implementation.
# Input/output: Read nonnegative k on the first line and the complete text on the next line. Print the shifted text.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
k = int(sys.stdin.readline()) % 26
s = line()
result = []
for c in s:
    if 'a' <= c <= 'z':
        c = chr((ord(c) - 97 + k) % 26 + 97)
    elif 'A' <= c <= 'Z':
        c = chr((ord(c) - 65 + k) % 26 + 65)
    result.append(c)
print(''.join(result))
