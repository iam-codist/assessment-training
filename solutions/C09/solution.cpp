/* C09 — reference implementation.
 * Input/output: Read base1 numeral1, then base2 numeral2. Print LESS, EQUAL or GREATER. Values fit
 * signed 64-bit. Assumes valid input within the lesson constraints. Run instructions: see
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

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int b1, b2;
    string a, b;
    cin >> b1 >> a >> b2 >> b;
    ll x = stoll(a, nullptr, b1), y = stoll(b, nullptr, b2);
    cout << (x < y ? "LESS" : x > y ? "GREATER" : "EQUAL") << "\n";
    return 0;
}
