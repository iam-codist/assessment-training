/* LC9 — reference implementation.
 * Input/output: Read a signed 32-bit integer. Print true if its decimal representation is a
 * palindrome, otherwise false. Assumes valid input within the lesson constraints. Run instructions:
 * see SOLUTIONS.md in the repository root.
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
    char s[32];
    snprintf(s, sizeof(s), "%lld", n);
    int l = 0, r = (int)strlen(s) - 1, ok = n >= 0;
    while (l < r)
        if (s[l++] != s[r--])
            ok = 0;
    puts(ok ? "true" : "false");
    return 0;
}
