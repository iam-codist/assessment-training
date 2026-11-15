/* LC387 — reference implementation.
 * Input/output: Read a lowercase English string. Print the zero-based index of its first unique
 * character, or -1. Assumes valid input within the lesson constraints. Run instructions: see
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
    string s;
    getline(cin, s);
    int count[26] = {}, answer = -1;
    for (char c : s)
        count[c - 'a']++;
    for (int i = 0; i < (int)s.size(); i++)
        if (count[s[i] - 'a'] == 1) {
            answer = i;
            break;
        }
    cout << answer << "\n";
    return 0;
}
