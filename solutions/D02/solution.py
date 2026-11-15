# D02 — reference implementation.
# Input/output: Read n and n integers. Print the second-largest distinct value, or -1 if absent.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = sorted(set((next(it) for _ in range(n))))
print(a[-2] if len(a) > 1 else -1)
