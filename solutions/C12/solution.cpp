/* C12 — reference implementation.
 * Input/output: Read nonnegative k on the first line and the complete text on the next line. Print
 * the shifted text. Assumes valid input within the lesson constraints. Run instructions: see
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
ll read_num() {
    ll value;
    cin >> value;
    return value;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    ll k = read_num() % 26;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    string s;
    getline(cin, s);
    for (char &c : s) {
        if (c >= 'a' && c <= 'z')
            c = char('a' + (c - 'a' + k) % 26);
        else if (c >= 'A' && c <= 'Z')
            c = char('A' + (c - 'A' + k) % 26);
    }
    cout << s << "\n";
    return 0;
}
