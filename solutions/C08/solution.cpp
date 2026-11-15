/* C08 — reference implementation.
 * Input/output: Read n and budget, then n prices. Print minimum-total and change, or IMPOSSIBLE.
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
    ll b = read_num();
    auto a = read_array(n);
    sort(a.begin(), a.end());
    if (n < 3 || a[0] + a[1] + a[2] > b)
        cout << "IMPOSSIBLE\n";
    else {
        ll s = a[0] + a[1] + a[2];
        cout << s << " " << b - s << "\n";
    }
    return 0;
}
