# D04 — reference implementation.
# Input/output: Read one ASCII password line. Apply the classroom rule (at least 7 characters); print 1 or 0.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
valid = len(s) >= 7 and (not s[:1].isdigit()) and (' ' not in s) and ('/' not in s)
valid = valid and any(('A' <= c <= 'Z' for c in s)) and any(('0' <= c <= '9' for c in s))
print(int(valid))
