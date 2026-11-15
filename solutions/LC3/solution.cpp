/* LC3 — reference implementation.
 * Input/output: Read one ASCII text line. Print the length of the longest substring without a
 * repeated character. Assumes valid input within the lesson constraints. Run instructions: see
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
    vector<int> last(256, -1);
    int left = 0, best = 0;
    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = s[r];
        left = max(left, last[c] + 1);
        last[c] = r;
        best = max(best, r - left + 1);
    }
    cout << best << "\n";
    return 0;
}
