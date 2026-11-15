/* D03 — reference implementation.
 * Input/output: Read a line of lowercase English letters. Print the number of distinct letters.
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
    bool seen[26] = {};
    for (char c : s)
        seen[c - 'a'] = true;
    int total = 0;
    for (bool x : seen)
        total += x;
    cout << total << "\n";
    return 0;
}
