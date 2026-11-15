/* LC1295 — reference implementation.
 * Input/output: Read n followed by n positive integers. Print how many have an even number of
 * decimal digits. Assumes valid input within the lesson constraints. Run instructions: see
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
    int n = (int)read_num(), answer = 0;
    for (int i = 0; i < n; i++) {
        ll x = read_num();
        int digits = 0;
        do {
            digits++;
            x /= 10;
        } while (x);
        answer += digits % 2 == 0;
    }
    printf("%d\n", answer);
    return 0;
}
