# C13 — reference implementation.
# Input/output: Read q, then q commands (SET/ADD/SUB/MUL and an integer). Print the final accumulator.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def line():
    return sys.stdin.readline().rstrip('\r\n')
q = int(sys.stdin.readline())
value = 0
for _ in range(q):
    op, x = sys.stdin.readline().split()
    x = int(x)
    if op == 'SET':
        value = x
    elif op == 'ADD':
        value += x
    elif op == 'SUB':
        value -= x
    elif op == 'MUL':
        value *= x
print(value)
