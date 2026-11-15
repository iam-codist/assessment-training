/* C05 — reference implementation.
 * Input/output: Read n and target, then n integers. Print value and zero-based index; keep the
 * earliest tie. Assumes valid input within the lesson constraints. Run instructions: see
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
    ll t = read_num();
    auto a = read_array(n);
    int best = 0;
    for (int i = 1; i < n; i++)
        if (llabs(a[i] - t) < llabs(a[best] - t))
            best = i;
    cout << a[best] << " " << best << "\n";
    return 0;
}
