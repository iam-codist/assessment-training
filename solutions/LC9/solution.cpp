/* LC9 — reference implementation.
 * Input/output: Read a signed 32-bit integer. Print true if its decimal representation is a
 * palindrome, otherwise false. Assumes valid input within the lesson constraints. Run instructions:
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
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    ll n = read_num();
    string s = to_string(n), r = s;
    reverse(r.begin(), r.end());
    cout << (n >= 0 && s == r ? "true" : "false") << "\n";
    return 0;
}
