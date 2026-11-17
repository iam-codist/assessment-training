import sys

text = sys.stdin.readline().strip()
stack = [-1]
best = 0
for index, character in enumerate(text):
    if character == '(':
        stack.append(index)
    else:
        stack.pop()
        if not stack:
            stack.append(index)
        else:
            best = max(best, index - stack[-1])
print(best)
