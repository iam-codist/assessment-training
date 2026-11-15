/* DP02 — reference implementation.
 * Input/output: Read coin count n and amount (0 through 10000), then n positive coin values. Print
 * minimum coins with unlimited reuse, or -1. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
 */
#include <algorithm>
#include <cctype>
#include <climits>
#include <cstdlib>
#include <iostream>
#include <limits>
#include <map>
#include <numeric>
#include <set>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;
using ll = long long;
ll read_num() {
    ll value;
    cin >> value;
    return value;
}
vector<ll> read_array(int n) {
    vector<ll> a(n);
    for (ll &x : a)
        cin >> x;
    return a;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n = read_num(), amount = read_num();
    auto coins = read_array(n);
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int total = 1; total <= amount; total++)
        for (ll coin : coins)
            if (coin <= total)
                dp[total] = min(dp[total], dp[total - coin] + 1);
    cout << (dp[amount] > amount ? -1 : dp[amount]) << "\n";
    return 0;
}
