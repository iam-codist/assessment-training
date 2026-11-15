/* LC2299 — reference implementation.
 * Input/output: Read an ASCII password line. Apply Strong Password Checker II rules and print true
 * or false. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
 * in the repository root.
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
    string special = "!@#$%^&*()-+";
    bool low = false, up = false, digit = false, sym = false, ok = s.size() >= 8;
    for (size_t i = 0; i < s.size(); i++) {
        char c = s[i];
        low |= c >= 'a' && c <= 'z';
        up |= c >= 'A' && c <= 'Z';
        digit |= c >= '0' && c <= '9';
        sym |= special.find(c) != string::npos;
        if (i && c == s[i - 1])
            ok = false;
    }
    cout << (ok && low && up && digit && sym ? "true" : "false") << "\n";
    return 0;
}
