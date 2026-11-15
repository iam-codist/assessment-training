# LC414 — reference implementation.
# Input/output: Read positive n and n integers. Print third-largest distinct value, or the maximum if fewer than three exist.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = sorted(set((next(it) for _ in range(n))), reverse=True)
print(a[2] if len(a) >= 3 else a[0])
