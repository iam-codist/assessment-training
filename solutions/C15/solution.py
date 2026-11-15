# C15 — reference implementation.
# Input/output: Read n, followed by the n−1 supplied roll numbers. Print the missing number.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
missing = n * (n + 1) // 2
for _ in range(n - 1):
    missing -= next(it)
print(missing)
