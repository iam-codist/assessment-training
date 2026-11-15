/* C06 — reference implementation.
 * Input/output: Read L R a b. Print the sum of numbers divisible by exactly one divisor.
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
    ll l = read_num(), r = read_num(), a = read_num(), b = read_num(), sum = 0;
    for (ll x = l; x <= r; x++)
        if ((x % a == 0) != (x % b == 0))
            sum += x;
    cout << sum << "\n";
    return 0;
}
