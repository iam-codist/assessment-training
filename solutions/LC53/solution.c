/* LC53 — reference implementation.
 * Input/output: Read positive n and n integers. Print the maximum sum of a nonempty contiguous
 * subarray. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
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

int main(void) {
    int n = (int)read_num();
    if (n <= 0)
        return 1; /* A nonempty subarray requires at least one input value. */
    ll *a = read_array(n), current = a[0], best = a[0];
    for (int i = 1; i < n; i++) {
        current = current + a[i] > a[i] ? current + a[i] : a[i];
        if (current > best)
            best = current;
    }
    printf("%lld\n", best);
    free(a);
    return 0;
}
