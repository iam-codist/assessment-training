/* D04 — reference implementation.
 * Input/output: Read one ASCII password line. Apply the classroom rule (at least 7 characters);
 * print 1 or 0. Assumes valid input within the lesson constraints. Run instructions: see
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
    bool upper = false, digit = false, ok = s.size() >= 7 && !isdigit((unsigned char)s[0]);
    for (char c : s) {
        upper |= c >= 'A' && c <= 'Z';
        digit |= c >= '0' && c <= '9';
        if (c == ' ' || c == '/')
            ok = false;
    }
    cout << (ok && upper && digit ? 1 : 0) << "\n";
    return 0;
}
