/* C09 — reference implementation.
 * Input/output: Read base1 numeral1, then base2 numeral2. Print LESS, EQUAL or GREATER. Values fit
 * signed 64-bit. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
#include <ctype.h>
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef long long ll;

int main(void) {
    int b1, b2;
    char a[128], b[128];
    if (scanf("%d %127s %d %127s", &b1, a, &b2, b) != 4)
        return 0;
    ll x = strtoll(a, NULL, b1), y = strtoll(b, NULL, b2);
    puts(x < y ? "LESS" : x > y ? "GREATER" : "EQUAL");
    return 0;
}
