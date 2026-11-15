/* LC414 — reference implementation.
 * Input/output: Read positive n and n integers. Print third-largest distinct value, or the maximum
 * if fewer than three exist. Assumes valid input within the lesson constraints. Run instructions:
 * see SOLUTIONS.md in the repository root.
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
    int distinct = 1;
    ll answer = a[n - 1];
    for (int i = n - 2; i >= 0; i--)
        if (a[i] != a[i + 1] && ++distinct == 3) {
            answer = a[i];
            break;
        }
    printf("%lld\n", answer);
    free(a);
    return 0;
}
