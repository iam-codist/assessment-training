# LC1295 — reference implementation.
# Input/output: Read n followed by n positive integers. Print how many have an even number of decimal digits.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
answer = 0
for _ in range(n):
    x = next(it)
    digits = 0
    while x:
        digits += 1
        x //= 10
    answer += digits % 2 == 0
print(answer)
