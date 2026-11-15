/* LC189 — reference implementation.
 * Input/output: Read positive n and nonnegative k, then n integers. Print the array after rotating
 * right by k. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
 * in the repository root.
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
static void reverse_range(ll *a, int l, int r) {
    while (l < r) {
        ll t = a[l];
        a[l++] = a[r];
        a[r--] = t;
    }
}
int main(void) {
    int n = (int)read_num(), k = (int)(read_num() % n);
    ll *a = read_array(n);
    reverse_range(a, 0, n - 1);
    reverse_range(a, 0, k - 1);
    reverse_range(a, k, n - 1);
    print_array(a, n);
    free(a);
    return 0;
}
