/* LC977 — reference implementation.
 * Input/output: Read n and a sorted array of n integers. Print squares in nondecreasing order.
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
    vector<ll> result(n);
    int l = 0, r = n - 1;
    for (int i = n - 1; i >= 0; i--) {
        if (llabs(a[l]) > llabs(a[r])) {
            result[i] = a[l] * a[l];
            l++;
        } else {
            result[i] = a[r] * a[r];
            r--;
        }
    }
    print_array(result);
    return 0;
}
