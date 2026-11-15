/* LC3 — reference implementation.
 * Input/output: Read one ASCII text line. Print the length of the longest substring without a
 * repeated character. Assumes valid input within the lesson constraints. Run instructions: see
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
    int last[256], left = 0, best = 0;
    for (int i = 0; i < 256; i++)
        last[i] = -1;
    for (int r = 0; s[r]; r++) {
        unsigned char c = s[r];
        if (last[c] + 1 > left)
            left = last[c] + 1;
        last[c] = r;
        if (r - left + 1 > best)
            best = r - left + 1;
    }
    printf("%d\n", best);
    free(s);
    return 0;
}
