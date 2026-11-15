/* LC1004 — reference implementation.
 * Input/output: Read n and nonnegative k, then n binary values. Print the longest window with at
 * most k zeros. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
#include <ctype.h>
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef long long ll;
static ll read_num(void) {
    ll value;
    if (scanf("%lld", &value) != 1)
        exit(1);
    return value;
}
static ll *read_array(int n) {
    ll *a = malloc((n ? n : 1) * sizeof(ll));
    if (!a)
        exit(1);
    for (int i = 0; i < n; i++)
        a[i] = read_num();
    return a;
}

int main(void) {
    int n = (int)read_num(), k = (int)read_num();
    ll *a = read_array(n);
    int l = 0, zeros = 0, best = 0;
    for (int r = 0; r < n; r++) {
        zeros += a[r] == 0;
        while (zeros > k) {
            zeros -= a[l] == 0;
            l++;
        }
        if (r - l + 1 > best)
            best = r - l + 1;
    }
    printf("%d\n", best);
    free(a);
    return 0;
}
