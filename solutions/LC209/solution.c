/* LC209 — reference implementation.
 * Input/output: Read n and a positive target, then n positive integers. Print the shortest window
 * with sum at least target, or 0. Assumes valid input within the lesson constraints. Run
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
    int n = (int)read_num();
    ll target = read_num(), *a = read_array(n), sum = 0;
    int l = 0, best = n + 1;
    for (int r = 0; r < n; r++) {
        sum += a[r];
        while (sum >= target) {
            if (r - l + 1 < best)
                best = r - l + 1;
            sum -= a[l++];
        }
    }
    printf("%d\n", best == n + 1 ? 0 : best);
    free(a);
    return 0;
}
