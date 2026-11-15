/* DP01 — reference implementation.
 * Input/output: Read n from 0 through 90. Print ways to climb n steps using moves of 1 or 2 steps.
 * There is one empty way for n=0. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
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
    ll previous = 1, current = 1;
    for (int step = 2; step <= n; step++) {
        ll next = previous + current;
        previous = current;
        current = next;
    }
    cout << current << "\n";
    return 0;
}
