/* C01 — reference implementation.
 * Input/output: Read n, followed by n integers. Print the longest strictly increasing contiguous
 * length. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
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
    int best = 1, run = 1;
    for (int i = 1; i < n; i++) {
        run = a[i] > a[i - 1] ? run + 1 : 1;
        best = max(best, run);
    }
    cout << best << "\n";
    return 0;
}
