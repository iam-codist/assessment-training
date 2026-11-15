/* LC918 — reference implementation.
 * Input/output: Read positive n and n integers. Print the maximum nonempty circular subarray sum.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
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
    auto a = read_array(n);
    ll hi = a[0], lo = a[0], best = a[0], worst = a[0], total = a[0];
    for (int i = 1; i < n; i++) {
        hi = max(a[i], hi + a[i]);
        lo = min(a[i], lo + a[i]);
        best = max(best, hi);
        worst = min(worst, lo);
        total += a[i];
    }
    cout << (best < 0 ? best : max(best, total - worst)) << "\n";
    return 0;
}
