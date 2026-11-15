/* C13 — reference implementation.
 * Input/output: Read q, then q commands (SET/ADD/SUB/MUL and an integer). Print the final
 * accumulator. Assumes valid input within the lesson constraints. Run instructions: see
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
    int q = (int)read_num();
    ll v = 0;
    while (q--) {
        char op[4];
        ll x;
        if (scanf("%3s %lld", op, &x) != 2)
            return 0;
        if (!strcmp(op, "SET"))
            v = x;
        else if (!strcmp(op, "ADD"))
            v += x;
        else if (!strcmp(op, "SUB"))
            v -= x;
        else if (!strcmp(op, "MUL"))
            v *= x;
    }
    printf("%lld\n", v);
    return 0;
}
