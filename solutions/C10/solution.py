# C10 — reference implementation.
# Input/output: Read one complete label line. Print the normalized label, or EMPTY.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
parts = []
pending = False
for c in s:
    if c in '-_':
        pending = bool(parts)
    else:
        if pending:
            parts.append('-')
        parts.append(c)
        pending = False
print(''.join(parts) or 'EMPTY')
