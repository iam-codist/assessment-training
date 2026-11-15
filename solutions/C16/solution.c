/* C16 — reference implementation.
 * Input/output: Read r and c, then r rows of c integers. Print the earliest best-row index and row
 * sum. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in the
 * repository root.
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

int main(void) {
    int r = (int)read_num(), c = (int)read_num(), index = 0;
    ll best = LLONG_MIN;
    for (int i = 0; i < r; i++) {
        ll sum = 0;
        for (int j = 0; j < c; j++)
            sum += read_num();
        if (i == 0 || sum > best) {
            best = sum;
            index = i;
        }
    }
    printf("%d %lld\n", index, best);
    return 0;
}
