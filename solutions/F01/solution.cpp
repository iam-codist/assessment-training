/* F01 — reference implementation.
 * Input/output: Read positive n and k (1 through n), then n integers. Print the maximum sum over
 * exactly k consecutive elements. Assumes valid input within the lesson constraints. Run
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
    int n = read_num(), k = read_num();
    auto a = read_array(n);
    ll window = 0;
    for (int i = 0; i < k; i++)
        window += a[i];
    ll best = window;
    for (int r = k; r < n; r++) {
        window += a[r] - a[r - k];
        best = max(best, window);
    }
    cout << best << "\n";
    return 0;
}
