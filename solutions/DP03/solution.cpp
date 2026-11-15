/* DP03 — reference implementation.
 * Input/output: Read two ASCII strings on separate lines, at most 1000 characters each. Print the
 * longest common subsequence length. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
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
    vector<int> previous(b.size() + 1), current(b.size() + 1);
    for (char x : a) {
        current[0] = 0;
        for (size_t j = 1; j <= b.size(); j++)
            current[j] = x == b[j - 1] ? previous[j - 1] + 1 : max(previous[j], current[j - 1]);
        swap(previous, current);
    }
    cout << previous[b.size()] << "\n";
    return 0;
}
