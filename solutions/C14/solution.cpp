/* C14 — reference implementation.
 * Input/output: Read positive n. Print odd-part and exponent-of-two.
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
ll read_num() {
    ll value;
    cin >> value;
    return value;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    ll n = read_num();
    int k = 0;
    while (n % 2 == 0) {
        n /= 2;
        k++;
    }
    cout << n << " " << k << "\n";
    return 0;
}
