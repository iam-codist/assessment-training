/* C15 — reference implementation.
 * Input/output: Read n, followed by the n−1 supplied roll numbers. Print the missing number.
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
    ll n = read_num(), missing = n * (n + 1) / 2;
    for (ll i = 0; i < n - 1; i++)
        missing -= read_num();
    cout << missing << "\n";
    return 0;
}
