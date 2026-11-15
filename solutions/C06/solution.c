/* C06 — reference implementation.
 * Input/output: Read L R a b. Print the sum of numbers divisible by exactly one divisor.
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
    ll l = read_num(), r = read_num(), a = read_num(), b = read_num(), sum = 0;
    for (ll x = l; x <= r; x++)
        if ((x % a == 0) != (x % b == 0))
            sum += x;
    printf("%lld\n", sum);
    return 0;
}
