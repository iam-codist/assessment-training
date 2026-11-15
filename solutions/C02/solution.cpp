/* C02 — reference implementation.
 * Input/output: Read n and capacity, then n order sizes. Print accepted-count and
 * remaining-capacity. Assumes valid input within the lesson constraints. Run instructions: see
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
    int n = read_num();
    ll remaining = read_num();
    int count = 0;
    for (int i = 0; i < n; i++) {
        ll size = read_num();
        if (size > remaining)
            break;
        remaining -= size;
        count++;
    }
    cout << count << " " << remaining << "\n";
    return 0;
}
