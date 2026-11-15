/* LC242 — reference implementation.
 * Input/output: Read two lowercase English strings, one per line. Print true or false for anagrams.
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
    string a, b;
    getline(cin, a);
    getline(cin, b);
    int count[26] = {};
    for (char c : a)
        count[c - 'a']++;
    for (char c : b)
        count[c - 'a']--;
    bool ok = true;
    for (int x : count)
        if (x)
            ok = false;
    cout << (ok ? "true" : "false") << "\n";
    return 0;
}
