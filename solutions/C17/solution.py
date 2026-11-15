# C17 — reference implementation.
# Input/output: Read one complete ASCII line. Print YES or NO after ignoring non-alphanumeric characters and case.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
s = line()
left = 0
right = len(s) - 1
while left < right:
    if not s[left].isalnum():
        left += 1
        continue
    if not s[right].isalnum():
        right -= 1
        continue
    if s[left].lower() != s[right].lower():
        print('NO')
        break
    left += 1
    right -= 1
else:
    print('YES')
