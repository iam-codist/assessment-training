# DP02 — reference implementation.
# Input/output: Read coin count n and amount (0 through 10000), then n positive coin values. Print minimum coins with unlimited reuse, or -1.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
it = tokens()
n = next(it)
amount = next(it)
coins = [next(it) for _ in range(n)]
dp = [0] + [amount + 1] * amount
for total in range(1, amount + 1):
    for coin in coins:
        if coin <= total:
            dp[total] = min(dp[total], dp[total - coin] + 1)
print(-1 if dp[amount] > amount else dp[amount])
