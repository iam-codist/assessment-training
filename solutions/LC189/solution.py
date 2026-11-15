# LC189 — reference implementation.
# Input/output: Read positive n and nonnegative k, then n integers. Print the array after rotating right by k.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
k = next(it) % n
a = [next(it) for _ in range(n)]

def reverse(left, right):
    while left < right:
        a[left], a[right] = (a[right], a[left])
        left += 1
        right -= 1
reverse(0, n - 1)
reverse(0, k - 1)
reverse(k, n - 1)
print(*a)
