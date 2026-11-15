"""C02: accept orders in order; stop at the first one that does not fit."""
import sys


def accept_orders(orders, capacity):
    count = 0
    remaining = capacity
    for size in orders:
        if size > remaining:
            break
        remaining -= size
        count += 1
    return count, remaining


if __name__ == "__main__":
    values = list(map(int, sys.stdin.read().split()))
    n, capacity = values[:2]
    orders = values[2:2 + n]
    count, remaining = accept_orders(orders, capacity)
    print(count, remaining)
