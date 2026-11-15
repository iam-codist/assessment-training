/* D04 — reference implementation.
 * Input/output: Read one ASCII password line. Apply the classroom rule (at least 7 characters);
 * print 1 or 0. Assumes valid input within the lesson constraints. Run instructions: see
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
    int upper = 0, digit = 0, ok = strlen(s) >= 7 && !isdigit((unsigned char)s[0]);
    for (size_t i = 0; s[i]; i++) {
        char c = s[i];
        upper |= c >= 'A' && c <= 'Z';
        digit |= c >= '0' && c <= '9';
        if (c == ' ' || c == '/')
            ok = 0;
    }
    printf("%d\n", ok && upper && digit);
    free(s);
    return 0;
}
