<!-- Generated from content/coding/array-scanning/lc1608-special-array-with-x-elements-greater-than-or-equal-x.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC1608 · **Practice type:** Worked solution

# Special Array With X Elements Greater Than or Equal X

## Question

For a nonempty array of nonnegative integers, find x such that exactly x elements are at least x. Return -1 if there is no such x.

## Example 1

**Input**

```text
[3,5]; [0,0]; [0,4,3,0,4]
```

**Output**

```text
2; -1; 3
```

## Notes

x is both the threshold and the required count.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Try x from 1 through n and count values >= x. Brute force is O(n²); the discussed sorting approach is O(n log n).

## Solutions in four languages

These references use sorting and a boundary check: O(n log n) time. For a candidate x, the last x values must be at least x and the preceding value, if any, must be smaller.

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read n and n nonnegative integers. Print x if exactly x elements are at least x, otherwise -1.

**Sample program input**

```text
2
3 5
```

**Sample program output**

```text
2
```

- [C source](../../../solutions/LC1608/solution.c)
- [C++ source](../../../solutions/LC1608/solution.cpp)
- [Python source](../../../solutions/LC1608/solution.py)
- [Java source](../../../solutions/LC1608/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

## Source context

Additional coding lesson.

---

[← LC414](lc414-third-maximum-number.md) · [Topic index](README.md)
