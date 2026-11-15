/* LC49 — reference implementation.
 * Input/output: Read n, then n lowercase English words, one per line (a word may be empty). Print
 * groups as JSON arrays, ordered by sorted-letter key; retain input order inside each group.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
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
static void discard_line(void) {
    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF) {
    }
}
typedef struct {
    char *word, *key;
    int index;
} Word;
static int compare_char(const void *a, const void *b) {
    return *(const unsigned char *)a - *(const unsigned char *)b;
}
static int compare_word(const void *a, const void *b) {
    const Word *x = a, *y = b;
    int cmp = strcmp(x->key, y->key);
    return cmp ? cmp : (x->index > y->index) - (x->index < y->index);
}
int main(void) {
    int n = (int)read_num();
    discard_line();
    Word *words = calloc(n ? n : 1, sizeof(Word));
    for (int i = 0; i < n; i++) {
        words[i].word = read_line();
        words[i].key = malloc(strlen(words[i].word) + 1);
        strcpy(words[i].key, words[i].word);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), compare_char);
        words[i].index = i;
    }
    qsort(words, n, sizeof(Word), compare_word);
    for (int i = 0; i < n;) {
        printf("[");
        int j = i;
        while (j < n && strcmp(words[i].key, words[j].key) == 0) {
            if (j > i)
                printf(",");
            printf("\"%s\"", words[j].word);
            j++;
        }
        puts("]");
        i = j;
    }
    for (int i = 0; i < n; i++) {
        free(words[i].word);
        free(words[i].key);
    }
    free(words);
    return 0;
}
