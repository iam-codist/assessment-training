/* C17 — reference implementation.
 * Input/output: Read one complete ASCII line. Print YES or NO after ignoring non-alphanumeric
 * characters and case. Assumes valid input within the lesson constraints. Run instructions: see
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
    int l = 0, r = (int)s.size() - 1;
    bool ok = true;
    while (l < r) {
        if (!isalnum((unsigned char)s[l])) {
            l++;
            continue;
        }
        if (!isalnum((unsigned char)s[r])) {
            r--;
            continue;
        }
        if (tolower((unsigned char)s[l]) != tolower((unsigned char)s[r])) {
            ok = false;
            break;
        }
        l++;
        r--;
    }
    cout << (ok ? "YES" : "NO") << "\n";
    return 0;
}
