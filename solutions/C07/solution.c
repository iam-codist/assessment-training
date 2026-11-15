/* C07 — reference implementation.
 * Input/output: Read n and n integers. Print the absolute difference of sums at even and odd
 * indices. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
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
    ll balance = 0;
    for (int i = 0; i < n; i++) {
        ll x = read_num();
        balance += i % 2 ? -x : x;
    }
    printf("%lld\n", llabs(balance));
    return 0;
}
