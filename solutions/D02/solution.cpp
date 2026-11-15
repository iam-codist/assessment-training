/* D02 — reference implementation.
 * Input/output: Read n and n integers. Print the second-largest distinct value, or -1 if absent.
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
    sort(a.begin(), a.end());
    int i = n - 2;
    while (i >= 0 && a[i] == a[n - 1])
        i--;
    cout << (i >= 0 ? a[i] : -1) << "\n";
    return 0;
}
