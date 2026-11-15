# C14 — reference implementation.
# Input/output: Read positive n. Print odd-part and exponent-of-two.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys
n = int(sys.stdin.read())
k = 0
while n % 2 == 0:
    n //= 2
    k += 1
print(n, k)
