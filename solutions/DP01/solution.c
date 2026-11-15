/* DP01 — reference implementation.
 * Input/output: Read n from 0 through 90. Print ways to climb n steps using moves of 1 or 2 steps.
 * There is one empty way for n=0. Assumes valid input within the lesson constraints. Run
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

int main(void) {
    int n = (int)read_num();
    ll previous = 1, current = 1;
    for (int step = 2; step <= n; step++) {
        ll next = previous + current;
        previous = current;
        current = next;
    }
    printf("%lld\n", current);
    return 0;
}
