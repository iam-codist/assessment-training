/* LC11 — reference implementation.
 * Input/output: Read n (at least 2), then n nonnegative heights. Print maximum container area.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
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
    int n = (int)read_num();
    ll *a = read_array(n), best = 0;
    int l = 0, r = n - 1;
    while (l < r) {
        ll area = (r - l) * (a[l] < a[r] ? a[l] : a[r]);
        if (area > best)
            best = area;
        if (a[l] < a[r])
            l++;
        else
            r--;
    }
    printf("%lld\n", best);
    free(a);
    return 0;
}
