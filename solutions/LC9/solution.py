# LC9 — reference implementation.
# Input/output: Read a signed 32-bit integer. Print true if its decimal representation is a palindrome, otherwise false.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
n = next(tokens())
s = str(n)
print(str(n >= 0 and s == s[::-1]).lower())
