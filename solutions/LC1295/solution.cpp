/* LC1295 — reference implementation.
 * Input/output: Read n followed by n positive integers. Print how many have an even number of
 * decimal digits. Assumes valid input within the lesson constraints. Run instructions: see
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
    int n = read_num(), answer = 0;
    for (int i = 0; i < n; i++) {
        ll x = read_num();
        int digits = 0;
        do {
            digits++;
            x /= 10;
        } while (x);
        answer += digits % 2 == 0;
    }
    cout << answer << "\n";
    return 0;
}
