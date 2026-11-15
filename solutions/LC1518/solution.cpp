/* LC1518 — reference implementation.
 * Input/output: Read full bottle count and exchange rate (at least 2). Print total bottles drunk.
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
    ll full = read_num(), rate = read_num(), total = full, empty = full;
    while (empty >= rate) {
        ll next = empty / rate;
        total += next;
        empty = next + empty % rate;
    }
    cout << total << "\n";
    return 0;
}
