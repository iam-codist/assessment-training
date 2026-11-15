/* C03 — reference implementation.
 * Input/output: Read q pairs of nonnegative integers. Print YES or NO for each pair.
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
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int q = read_num();
    while (q--) {
        ll a = read_num(), b = read_num();
        int x = 0, y = 0;
        for (; a; a /= 2)
            x += a % 2;
        for (; b; b /= 2)
            y += b % 2;
        cout << (x == y ? "YES" : "NO") << "\n";
    }
    return 0;
}
