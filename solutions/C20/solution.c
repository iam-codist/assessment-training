/* C20 — reference implementation.
 * Input/output: Read two digit strings on separate lines. Print MATCH or DIFFERENT; leading zeros
 * count. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
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
    char *a = read_line(), *b = read_line();
    int count[10] = {0}, ok = 1;
    for (size_t i = 0; a[i]; i++)
        count[a[i] - '0']++;
    for (size_t i = 0; b[i]; i++)
        count[b[i] - '0']--;
    for (int i = 0; i < 10; i++)
        if (count[i])
            ok = 0;
    puts(ok ? "MATCH" : "DIFFERENT");
    free(a);
    free(b);
    return 0;
}
