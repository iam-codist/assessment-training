/* D03 — reference implementation.
 * Input/output: Read a line of lowercase English letters. Print the number of distinct letters.
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
    int seen[26] = {0}, total = 0;
    for (size_t i = 0; s[i]; i++)
        seen[s[i] - 'a'] = 1;
    for (int i = 0; i < 26; i++)
        total += seen[i];
    printf("%d\n", total);
    free(s);
    return 0;
}
