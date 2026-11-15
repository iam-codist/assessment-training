/* C18 — reference implementation.
 * Input/output: Read n, then n coordinate pairs. Print total Manhattan distance including the
 * return to the origin. Assumes valid input within the lesson constraints. Run instructions: see
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
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n = read_num();
    ll x = 0, y = 0, total = 0;
    while (n--) {
        ll nx = read_num(), ny = read_num();
        total += llabs(nx - x) + llabs(ny - y);
        x = nx;
        y = ny;
    }
    cout << total + llabs(x) + llabs(y) << "\n";
    return 0;
}
