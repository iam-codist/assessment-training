/* LC414 — reference implementation.
 * Input/output: Read positive n and n integers. Print third-largest distinct value, or the maximum
 * if fewer than three exist. Assumes valid input within the lesson constraints. Run instructions:
 * see SOLUTIONS.md in the repository root.
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
    int distinct = 1;
    ll answer = a[n - 1];
    for (int i = n - 2; i >= 0; i--)
        if (a[i] != a[i + 1] && ++distinct == 3) {
            answer = a[i];
            break;
        }
    cout << answer << "\n";
    return 0;
}
