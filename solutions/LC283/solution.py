# LC283 — reference implementation.
# Input/output: Read n and n integers. Move zeros to the end while preserving nonzero order. Print the changed array.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
write = 0
for x in a:
    if x != 0:
        a[write] = x
        write += 1
for i in range(write, n):
    a[i] = 0
print(*a)
