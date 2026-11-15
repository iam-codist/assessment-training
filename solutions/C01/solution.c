/* C01 — reference implementation.
 * Input/output: Read n, followed by n integers. Print the longest strictly increasing contiguous
 * length. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
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
    ll *a = read_array(n);
    int best = 1, run = 1;
    for (int i = 1; i < n; i++) {
        run = a[i] > a[i - 1] ? run + 1 : 1;
        if (run > best)
            best = run;
    }
    printf("%d\n", best);
    free(a);
    return 0;
}
