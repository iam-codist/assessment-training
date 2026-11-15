/* C15 — reference implementation.
 * Input/output: Read n, followed by the n−1 supplied roll numbers. Print the missing number.
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
    ll n = read_num(), missing = n * (n + 1) / 2;
    for (ll i = 0; i < n - 1; i++)
        missing -= read_num();
    printf("%lld\n", missing);
    return 0;
}
