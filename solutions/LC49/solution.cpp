/* LC49 — reference implementation.
 * Input/output: Read n, then n lowercase English words, one per line (a word may be empty). Print
 * groups as JSON arrays, ordered by sorted-letter key; retain input order inside each group.
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
    int n = read_num();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    map<string, vector<string>> groups;
    for (int i = 0; i < n; i++) {
        string word;
        getline(cin, word);
        string key = word;
        sort(key.begin(), key.end());
        groups[key].push_back(word);
    }
    for (auto &entry : groups) {
        cout << "[";
        for (size_t j = 0; j < entry.second.size(); j++) {
            if (j)
                cout << ",";
            cout << "\"" << entry.second[j] << "\"";
        }
        cout << "]\n";
    }
    return 0;
}
