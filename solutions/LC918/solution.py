# LC918 — reference implementation.
# Input/output: Read positive n and n integers. Print the maximum nonempty circular subarray sum.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
hi = lo = best = worst = total = a[0]
for x in a[1:]:
    hi = max(x, hi + x)
    lo = min(x, lo + x)
    best = max(best, hi)
    worst = min(worst, lo)
    total += x
print(best if best < 0 else max(best, total - worst))
