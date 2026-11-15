/* DP03 — reference implementation.
 * Input/output: Read two ASCII strings on separate lines, at most 1000 characters each. Print the
 * longest common subsequence length. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
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
    size_t n = strlen(b);
    int *previous = calloc(n + 1, sizeof(int)), *current = calloc(n + 1, sizeof(int));
    for (size_t i = 0; a[i]; i++) {
        current[0] = 0;
        for (size_t j = 1; j <= n; j++)
            current[j] = a[i] == b[j - 1]
                             ? previous[j - 1] + 1
                             : (previous[j] > current[j - 1] ? previous[j] : current[j - 1]);
        int *temp = previous;
        previous = current;
        current = temp;
    }
    printf("%d\n", previous[n]);
    free(previous);
    free(current);
    free(a);
    free(b);
    return 0;
}
