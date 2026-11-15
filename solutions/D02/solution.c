/* D02 — reference implementation.
 * Input/output: Read n and n integers. Print the second-largest distinct value, or -1 if absent.
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
static int compare_ll(const void *a, const void *b) {
    ll x = *(const ll *)a, y = *(const ll *)b;
    return (x > y) - (x < y);
}

int main(void) {
    int n = (int)read_num();
    ll *a = read_array(n);
    qsort(a, n, sizeof(ll), compare_ll);
    int i = n - 2;
    while (i >= 0 && a[i] == a[n - 1])
        i--;
    printf("%lld\n", i >= 0 ? a[i] : -1);
    free(a);
    return 0;
}
