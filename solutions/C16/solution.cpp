/* C16 — reference implementation.
 * Input/output: Read r and c, then r rows of c integers. Print the earliest best-row index and row
 * sum. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in the
 * repository root.
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
    int r = read_num(), c = read_num(), index = 0;
    ll best = LLONG_MIN;
    for (int i = 0; i < r; i++) {
        ll sum = 0;
        for (int j = 0; j < c; j++)
            sum += read_num();
        if (i == 0 || sum > best) {
            best = sum;
            index = i;
        }
    }
    cout << index << " " << best << "\n";
    return 0;
}
