#include <stdio.h>
#include <string.h>

int main(void) {
    static char text[100002];
    static int stack[100002];
    if (fgets(text, sizeof(text), stdin) == NULL) return 0;
    size_t length = strcspn(text, "\r\n");
    int top = 0;
    int best = 0;
    stack[0] = -1;
    for (int index = 0; index < (int)length; ++index) {
        if (text[index] == '(') {
            stack[++top] = index;
        } else {
            --top;
            if (top < 0) {
                stack[++top] = index;
            } else {
                int current = index - stack[top];
                if (current > best) best = current;
            }
        }
    }
    printf("%d\n", best);
    return 0;
}
