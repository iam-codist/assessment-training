# LC977 — reference implementation.
# Input/output: Read n and a sorted array of n integers. Print squares in nondecreasing order.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
a = [next(it) for _ in range(n)]
answer = [0] * n
left = 0
right = n - 1
for i in range(n - 1, -1, -1):
    if abs(a[left]) > abs(a[right]):
        answer[i] = a[left] ** 2
        left += 1
    else:
        answer[i] = a[right] ** 2
        right -= 1
print(*answer)
