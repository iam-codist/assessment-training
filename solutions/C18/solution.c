/* C18 — reference implementation.
 * Input/output: Read n, then n coordinate pairs. Print total Manhattan distance including the
 * return to the origin. Assumes valid input within the lesson constraints. Run instructions: see
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
    ll x = 0, y = 0, total = 0;
    while (n--) {
        ll nx = read_num(), ny = read_num();
        total += llabs(nx - x) + llabs(ny - y);
        x = nx;
        y = ny;
    }
    printf("%lld\n", total + llabs(x) + llabs(y));
    return 0;
}
