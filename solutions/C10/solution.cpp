/* C10 — reference implementation.
 * Input/output: Read one complete label line. Print the normalized label, or EMPTY.
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
    string result;
    bool pending = false;
    for (char c : s) {
        if (c == '-' || c == '_')
            pending = !result.empty();
        else {
            if (pending)
                result += '-';
            result += c;
            pending = false;
        }
    }
    cout << (result.empty() ? "EMPTY" : result) << "\n";
    return 0;
}
