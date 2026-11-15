/* F01 — reference implementation.
 * Input/output: Read positive n and k (1 through n), then n integers. Print the maximum sum over
 * exactly k consecutive elements. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
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
    ll *a = read_array(n), window = 0;
    for (int i = 0; i < k; i++)
        window += a[i];
    ll best = window;
    for (int r = k; r < n; r++) {
        window += a[r] - a[r - k];
        if (window > best)
            best = window;
    }
    printf("%lld\n", best);
    free(a);
    return 0;
}
