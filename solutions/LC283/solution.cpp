/* LC283 — reference implementation.
 * Input/output: Read n and n integers. Move zeros to the end while preserving nonzero order. Print
 * the changed array. Assumes valid input within the lesson constraints. Run instructions: see
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
void print_array(const vector<ll> &a) {
    for (size_t i = 0; i < a.size(); i++) {
        if (i)
            cout << " ";
        cout << a[i];
    }
    cout << "\n";
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n = read_num();
    auto a = read_array(n);
    int write = 0;
    for (ll x : a)
        if (x)
            a[write++] = x;
    while (write < n)
        a[write++] = 0;
    print_array(a);
    return 0;
}
