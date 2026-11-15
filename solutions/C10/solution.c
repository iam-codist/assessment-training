/* C10 — reference implementation.
 * Input/output: Read one complete label line. Print the normalized label, or EMPTY.
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
    char *s = read_line(), *r = malloc(strlen(s) + 1);
    size_t k = 0;
    int pending = 0;
    for (size_t i = 0; s[i]; i++) {
        char c = s[i];
        if (c == '-' || c == '_')
            pending = k > 0;
        else {
            if (pending)
                r[k++] = '-';
            r[k++] = c;
            pending = 0;
        }
    }
    r[k] = 0;
    puts(k ? r : "EMPTY");
    free(s);
    free(r);
    return 0;
}
