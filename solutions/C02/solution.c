/* C02 — reference implementation.
 * Input/output: Read n and capacity, then n order sizes. Print accepted-count and
 * remaining-capacity. Assumes valid input within the lesson constraints. Run instructions: see
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

int main(void) {
    int n = (int)read_num();
    ll left = read_num();
    int count = 0;
    for (int i = 0; i < n; i++) {
        ll x = read_num();
        if (x > left)
            break;
        left -= x;
        count++;
    }
    printf("%d %lld\n", count, left);
    return 0;
}
