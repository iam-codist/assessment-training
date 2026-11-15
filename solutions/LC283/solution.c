/* LC283 — reference implementation.
 * Input/output: Read n and n integers. Move zeros to the end while preserving nonzero order. Print
 * the changed array. Assumes valid input within the lesson constraints. Run instructions: see
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
    ll *a = read_array(n);
    int write = 0;
    for (int i = 0; i < n; i++)
        if (a[i])
            a[write++] = a[i];
    while (write < n)
        a[write++] = 0;
    print_array(a, n);
    free(a);
    return 0;
}
