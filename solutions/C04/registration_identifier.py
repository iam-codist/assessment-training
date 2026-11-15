"""C04: validate every rule using explicit ASCII comparisons."""
import sys


def is_valid(s):
    if len(s) < 6 or len(s) > 12:
        return False
    if not ('a' <= s[0] <= 'z'):
        return False
    if s[-1] == '_' or '__' in s:
        return False
    digits = 0
    for ch in s:
        letter = 'a' <= ch <= 'z'
        digit = '0' <= ch <= '9'
        if not (letter or digit or ch == '_'):
            return False
        if digit:
            digits += 1
    return digits >= 2


if __name__ == "__main__":
    # Remove the line ending only; spaces are part of the candidate.
    candidate = sys.stdin.readline().rstrip('\r\n')
    print("VALID" if is_valid(candidate) else "INVALID")
