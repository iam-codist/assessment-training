/* C04 — reference implementation.
 * Input/output: Read one complete line, preserving spaces. Print VALID or INVALID.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
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
    size_t n = strlen(s);
    int digits = 0, ok = n >= 6 && n <= 12 && s[0] >= 'a' && s[0] <= 'z';
    for (size_t i = 0; i < n; i++) {
        char c = s[i];
        digits += c >= '0' && c <= '9';
        if (!((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '_'))
            ok = 0;
        if (i && c == '_' && s[i - 1] == '_')
            ok = 0;
    }
    ok = ok && digits >= 2 && n > 0 && s[n - 1] != '_';
    puts(ok ? "VALID" : "INVALID");
    free(s);
    return 0;
}
