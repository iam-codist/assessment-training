/* C12 — reference implementation.
 * Input/output: Read nonnegative k on the first line and the complete text on the next line. Print
 * the shifted text. Assumes valid input within the lesson constraints. Run instructions: see
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
static char *read_line(void) {
    size_t capacity = 128, length = 0;
    char *s = malloc(capacity);
    if (!s)
        exit(1);
    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF) {
        if (length + 1 == capacity) {
            capacity *= 2;
            char *next = realloc(s, capacity);
            if (!next) {
                free(s);
                exit(1);
            }
            s = next;
        }
        s[length++] = (char)ch;
    }
    if (length && s[length - 1] == '\r')
        length--;
    s[length] = '\0';
    return s;
}

int main(void) {
    ll k = read_num() % 26;
    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF) {
    }
    char *s = read_line();
    for (size_t i = 0; s[i]; i++) {
        char c = s[i];
        if (c >= 'a' && c <= 'z')
            s[i] = (char)('a' + (c - 'a' + k) % 26);
        else if (c >= 'A' && c <= 'Z')
            s[i] = (char)('A' + (c - 'A' + k) % 26);
    }
    puts(s);
    free(s);
    return 0;
}
