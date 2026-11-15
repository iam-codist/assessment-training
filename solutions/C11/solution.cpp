/* C11 — reference implementation.
 * Input/output: Read a nonempty digit string. Print its weighted checksum modulo 10.
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

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string s;
    getline(cin, s);
    int total = 0;
    for (size_t i = 0; i < s.size(); i++)
        total = (total + (s[i] - '0') * (i % 2 ? 1 : 3)) % 10;
    cout << total << "\n";
    return 0;
}
