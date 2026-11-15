/* D01 — reference implementation.
 * Input/output: Read divisor n, then range limit m. Print nondivisible-sum minus divisible-sum.
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

int main(void) {
    ll divisor = read_num(), limit = read_num(), total = 0;
    for (ll x = 1; x <= limit; x++)
        total += x % divisor == 0 ? -x : x;
    printf("%lld\n", total);
    return 0;
}
