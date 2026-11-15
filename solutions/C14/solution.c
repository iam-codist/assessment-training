/* C14 — reference implementation.
 * Input/output: Read positive n. Print odd-part and exponent-of-two.
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
    ll n = read_num();
    int k = 0;
    while (n % 2 == 0) {
        n /= 2;
        k++;
    }
    printf("%lld %d\n", n, k);
    return 0;
}
