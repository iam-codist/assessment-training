# C04 — reference implementation.
# Input/output: Read one complete line, preserving spaces. Print VALID or INVALID.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
digits = sum(('0' <= c <= '9' for c in s))
valid = 6 <= len(s) <= 12 and 'a' <= s[0] <= 'z' and (digits >= 2)
valid = valid and (not s.endswith('_')) and ('__' not in s)
valid = valid and all(('a' <= c <= 'z' or '0' <= c <= '9' or c == '_' for c in s))
print('VALID' if valid else 'INVALID')
