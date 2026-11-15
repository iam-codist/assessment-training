/* C13 — reference implementation.
 * Input/output: Read q, then q commands (SET/ADD/SUB/MUL and an integer). Print the final
 * accumulator. Assumes valid input within the lesson constraints. Run instructions: see
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
    int q = read_num();
    ll v = 0;
    while (q--) {
        string op;
        ll x;
        cin >> op >> x;
        if (op == "SET")
            v = x;
        else if (op == "ADD")
            v += x;
        else if (op == "SUB")
            v -= x;
        else if (op == "MUL")
            v *= x;
    }
    cout << v << "\n";
    return 0;
}
