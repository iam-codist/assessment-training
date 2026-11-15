/* LC1608 — reference implementation.
 * Input/output: Read n and n nonnegative integers. Print x if exactly x elements are at least x,
 * otherwise -1. Assumes valid input within the lesson constraints. Run instructions: see
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
    int n = read_num();
    auto a = read_array(n);
    sort(a.begin(), a.end());
    int answer = -1;
    for (int x = 1; x <= n; x++)
        if (a[n - x] >= x && (n == x || a[n - x - 1] < x)) {
            answer = x;
            break;
        }
    cout << answer << "\n";
    return 0;
}
