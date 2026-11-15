/* DP02 — reference implementation.
 * Input/output: Read coin count n and amount (0 through 10000), then n positive coin values. Print
 * minimum coins with unlimited reuse, or -1. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
 */
#include <ctype.h>
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef long long ll;
static ll read_num(void) {
    ll value;
    if (scanf("%lld", &value) != 1)
        exit(1);
    return value;
}
static ll *read_array(int n) {
    ll *a = malloc((n ? n : 1) * sizeof(ll));
    if (!a)
        exit(1);
    for (int i = 0; i < n; i++)
        a[i] = read_num();
    return a;
}

int main(void) {
    int n = (int)read_num(), amount = (int)read_num();
    ll *coins = read_array(n);
    int *dp = malloc((amount + 1) * sizeof(int));
    dp[0] = 0;
    for (int t = 1; t <= amount; t++)
        dp[t] = amount + 1;
    for (int t = 1; t <= amount; t++)
        for (int i = 0; i < n; i++)
            if (coins[i] <= t && dp[t - coins[i]] + 1 < dp[t])
                dp[t] = dp[t - coins[i]] + 1;
    printf("%d\n", dp[amount] > amount ? -1 : dp[amount]);
    free(coins);
    free(dp);
    return 0;
}
