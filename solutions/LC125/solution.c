/* LC125 — reference implementation.
 * Input/output: Read one ASCII line. Ignore non-alphanumeric characters and case; print true or
 * false for palindrome. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
#include <ctype.h>
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef long long ll;
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
    char *s = read_line();
    int l = 0, r = (int)strlen(s) - 1, ok = 1;
    while (l < r) {
        if (!isalnum((unsigned char)s[l])) {
            l++;
            continue;
        }
        if (!isalnum((unsigned char)s[r])) {
            r--;
            continue;
        }
        if (tolower((unsigned char)s[l]) != tolower((unsigned char)s[r])) {
            ok = 0;
            break;
        }
        l++;
        r--;
    }
    puts(ok ? "true" : "false");
    free(s);
    return 0;
}
