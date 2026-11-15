/* C05 — reference implementation.
 * Input/output: Read n and target, then n integers. Print value and zero-based index; keep the
 * earliest tie. Assumes valid input within the lesson constraints. Run instructions: see
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
    int n = (int)read_num();
    ll t = read_num(), *a = read_array(n);
    int best = 0;
    for (int i = 1; i < n; i++)
        if (llabs(a[i] - t) < llabs(a[best] - t))
            best = i;
    printf("%lld %d\n", a[best], best);
    free(a);
    return 0;
}
