/* LC53 — reference implementation.
 * Input/output: Read positive n and n integers. Print the maximum sum of a nonempty contiguous
 * subarray. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
 * in the repository root.
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
    ll current = a[0], best = a[0];
    for (int i = 1; i < n; i++) {
        current = max(a[i], current + a[i]);
        best = max(best, current);
    }
    cout << best << "\n";
    return 0;
}
