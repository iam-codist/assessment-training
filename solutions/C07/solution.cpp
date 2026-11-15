/* C07 — reference implementation.
 * Input/output: Read n and n integers. Print the absolute difference of sums at even and odd
 * indices. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
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
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n = read_num();
    ll balance = 0;
    for (int i = 0; i < n; i++) {
        ll x = read_num();
        balance += i % 2 ? -x : x;
    }
    cout << llabs(balance) << "\n";
    return 0;
}
