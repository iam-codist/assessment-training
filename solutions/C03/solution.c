/* C03 — reference implementation.
 * Input/output: Read q pairs of nonnegative integers. Print YES or NO for each pair.
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
    int q = (int)read_num();
    while (q--) {
        ll a = read_num(), b = read_num();
        int x = 0, y = 0;
        for (; a; a /= 2)
            x += (int)(a % 2);
        for (; b; b /= 2)
            y += (int)(b % 2);
        puts(x == y ? "YES" : "NO");
    }
    return 0;
}
