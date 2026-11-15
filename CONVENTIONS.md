# Conventions and common pitfalls

## Pseudocode

- Arrays use zero-based indexing unless a question says otherwise.
- `FOR ... TO ...` includes both endpoints.
- `DIV` means integer division; `MOD` means remainder.
- `AND`, `OR` and `XOR` on integers mean bitwise operations.
- Scalar function arguments use pass-by-value. Questions about object references explicitly say so.
- Arithmetic traces assume no overflow unless a question specifies a fixed-width type.
- Execute statements in order. A second independent `IF` evaluates the updated variables.

## Coding variants

- `D01` takes the divisor first and range limit second. `LC2894` uses the opposite parameter roles.
- `D02` asks for the second **distinct** maximum and returns `-1` when it does not exist. `LC414` asks for the third distinct maximum and falls back to the largest value.
- `D04` requires at least 7 password characters. The brief `B03` outline uses 4; `LC2299` uses 8 and additional rules. Apply the rules on the page you are solving.
- A fixed window must contain exactly `k` elements. Initialize its maximum from a real window so all-negative arrays work.
- Kadane's algorithm selects a nonempty subarray. Initialize from the first element rather than zero.
- Sliding-window shrinking for minimum target sum relies on positive input values.

## Corrections retained from the sessions

```text
(a XOR b) + 2 × (a AND b) = a + b
```

For Integer to Roman, the descending values `10, 9, 5, 4, 1` align with `X, IX, V, IV, I`.

`M01` adds the inner counter `j` and prints 20. `E03` adds the outer counter `i` and prints 30. They are different exercises.

For Container With Most Water, width is `rightIndex - leftIndex`, not the number of bars counted inclusively.

## Cognitive exercises

Grid positions use one-based labels such as `R2C3`. A move normally crosses one adjacent edge; follow each question's movement rules. Geo-Sudo uses row and column uniqueness without Sudoku box rules. Memory exercises are self-paced in the reading pages: use a timer and close the stimulus before answering.

Equal-valued arithmetic bubbles may be ordered either way unless the question says otherwise. Selection rounds ask for all matching bubbles in any order.

[Return to topics](docs/README.md)
