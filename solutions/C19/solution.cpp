/* C19 — reference implementation.
 * Input/output: Read n and n integers. Print second-distinct-maximum and frequency, or NONE.
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
    int i = n - 1;
    while (i >= 0 && a[i] == a[n - 1])
        i--;
    if (i < 0)
        cout << "NONE\n";
    else {
        ll second = a[i];
        int count = 0;
        while (i >= 0 && a[i] == second) {
            count++;
            i--;
        }
        cout << second << " " << count << "\n";
    }
    return 0;
}
