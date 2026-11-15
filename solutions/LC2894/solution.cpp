/* LC2894 — reference implementation.
 * Input/output: Read range limit n, then divisor m (the reverse of D01). Print nondivisible-sum
 * minus divisible-sum. Assumes valid input within the lesson constraints. Run instructions: see
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
    ll limit = read_num(), divisor = read_num(), total = 0;
    for (ll x = 1; x <= limit; x++)
        total += x % divisor == 0 ? -x : x;
    cout << total << "\n";
    return 0;
}
