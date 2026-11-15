/* LC11 — reference implementation.
 * Input/output: Read n (at least 2), then n nonnegative heights. Print maximum container area.
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
    int l = 0, r = n - 1;
    ll best = 0;
    while (l < r) {
        best = max(best, (r - l) * min(a[l], a[r]));
        if (a[l] < a[r])
            l++;
        else
            r--;
    }
    cout << best << "\n";
    return 0;
}
