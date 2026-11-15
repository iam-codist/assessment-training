/* LC209 — reference implementation.
 * Input/output: Read n and a positive target, then n positive integers. Print the shortest window
 * with sum at least target, or 0. Assumes valid input within the lesson constraints. Run
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
    int n = read_num();
    ll target = read_num();
    auto a = read_array(n);
    int l = 0, best = n + 1;
    ll sum = 0;
    for (int r = 0; r < n; r++) {
        sum += a[r];
        while (sum >= target) {
            best = min(best, r - l + 1);
            sum -= a[l++];
        }
    }
    cout << (best == n + 1 ? 0 : best) << "\n";
    return 0;
}
