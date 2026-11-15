/* LC977 — reference implementation.
 * Input/output: Read n and a sorted array of n integers. Print squares in nondecreasing order.
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
static void print_array(const ll *a, int n) {
    for (int i = 0; i < n; i++) {
        if (i)
            printf(" ");
        printf("%lld", a[i]);
    }
    puts("");
}

int main(void) {
    int n = (int)read_num();
    ll *a = read_array(n), *result = malloc((n ? n : 1) * sizeof(ll));
    int l = 0, r = n - 1;
    for (int i = n - 1; i >= 0; i--) {
        if (llabs(a[l]) > llabs(a[r])) {
            result[i] = a[l] * a[l];
            l++;
        } else {
            result[i] = a[r] * a[r];
            r--;
        }
    }
    print_array(result, n);
    free(a);
    free(result);
    return 0;
}
