/* C04 — reference implementation.
 * Input/output: Read one complete line, preserving spaces. Print VALID or INVALID.
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
    int digits = 0;
    bool ok = s.size() >= 6 && s.size() <= 12 && s[0] >= 'a' && s[0] <= 'z';
    for (size_t i = 0; i < s.size(); i++) {
        char c = s[i];
        digits += c >= '0' && c <= '9';
        if (!((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '_'))
            ok = false;
        if (i && c == '_' && s[i - 1] == '_')
            ok = false;
    }
    ok = ok && digits >= 2 && !s.empty() && s.back() != '_';
    cout << (ok ? "VALID" : "INVALID") << "\n";
    return 0;
}
