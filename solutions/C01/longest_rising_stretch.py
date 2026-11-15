"""C01: length of the longest strictly increasing contiguous stretch."""
import sys


def longest_stretch(readings):
    current = 1
    best = 1
    for i in range(1, len(readings)):
        if readings[i] > readings[i - 1]:
            current += 1
        else:
            current = 1
        best = max(best, current)
    return best


if __name__ == "__main__":
    values = list(map(int, sys.stdin.read().split()))
    n = values[0]
    readings = values[1:1 + n]
    print(longest_stretch(readings))
