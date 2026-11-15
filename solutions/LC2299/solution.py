# LC2299 — reference implementation.
# Input/output: Read an ASCII password line. Apply Strong Password Checker II rules and print true or false.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
special = '!@#$%^&*()-+'
valid = len(s) >= 8 and any(('a' <= c <= 'z' for c in s)) and any(('A' <= c <= 'Z' for c in s))
valid = valid and any(('0' <= c <= '9' for c in s)) and any((c in special for c in s))
valid = valid and all((s[i] != s[i - 1] for i in range(1, len(s))))
print(str(valid).lower())
