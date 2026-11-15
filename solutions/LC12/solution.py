# LC12 — reference implementation.
# Input/output: Read an integer from 1 through 3999. Print its Roman numeral.
# Assumes valid input within the lesson constraints.
# Run instructions: see SOLUTIONS.md in the repository root.

import sys

def tokens():
    return iter(map(int, sys.stdin.buffer.read().split()))
n = next(tokens())
values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
result = []
for value, symbol in zip(values, symbols):
    while n >= value:
        result.append(symbol)
        n -= value
print(''.join(result))
