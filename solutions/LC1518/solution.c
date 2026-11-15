/* LC1518 — reference implementation.
 * Input/output: Read full bottle count and exchange rate (at least 2). Print total bottles drunk.
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
    ll full = read_num(), rate = read_num(), total = full, empty = full;
    while (empty >= rate) {
        ll next = empty / rate;
        total += next;
        empty = next + empty % rate;
    }
    printf("%lld\n", total);
    return 0;
}
