/* LC918 — reference implementation.
 * Input/output: Read positive n and n integers. Print the maximum nonempty circular subarray sum.
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
    ll *a = read_array(n), hi = a[0], lo = a[0], best = a[0], worst = a[0], total = a[0];
    for (int i = 1; i < n; i++) {
        hi = hi + a[i] > a[i] ? hi + a[i] : a[i];
        lo = lo + a[i] < a[i] ? lo + a[i] : a[i];
        if (hi > best)
            best = hi;
        if (lo < worst)
            worst = lo;
        total += a[i];
    }
    ll answer = best < 0 ? best : (best > total - worst ? best : total - worst);
    printf("%lld\n", answer);
    free(a);
    return 0;
}
