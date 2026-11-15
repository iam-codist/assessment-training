/* LC1004 — reference implementation.
 * Input/output: Read n and nonnegative k, then n binary values. Print the longest window with at
 * most k zeros. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
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
    int n = read_num(), k = read_num();
    auto a = read_array(n);
    int l = 0, zeros = 0, best = 0;
    for (int r = 0; r < n; r++) {
        zeros += a[r] == 0;
        while (zeros > k) {
            zeros -= a[l] == 0;
            l++;
        }
        best = max(best, r - l + 1);
    }
    cout << best << "\n";
    return 0;
}
