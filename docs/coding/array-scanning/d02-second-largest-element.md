<!-- Generated from content/coding/array-scanning/d02-second-largest-element.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** D02 · **Practice type:** Worked solution · **Difficulty:** Easy

# Second Largest Element

## Question

Return the second-largest distinct value in an integer array, or -1 if no second distinct value exists. Input is a nonnegative size followed by that many integers; negative values are allowed.

## Example 1

**Input**

```text
5; array = [8,2,8,5,1]
```

**Output**

```text
5
```

## Notes

LeetCode 414 asks for the third distinct maximum and uses a different fallback.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Track the two largest distinct values; ignore duplicates of the maximum. O(n) time, O(1) extra space.

## Solutions in four languages

These reference programs sort to make the distinct-value rule easy to see: O(n log n) time. The scan-only approach described above can reduce this to O(n). Python builds a distinct set; other versions sort the input array.

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read n and n integers. Print the second-largest distinct value, or -1 if absent.

**Sample program input**

```text
5
4 9 9 2 6
```

**Sample program output**

```text
6
```

- [C source](../../../solutions/D02/solution.c)
- [C++ source](../../../solutions/D02/solution.cpp)
- [Python source](../../../solutions/D02/solution.py)
- [Java source](../../../solutions/D02/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← C16](c16-row-with-the-greatest-total.md) · [Topic index](README.md) · [LC414 →](lc414-third-maximum-number.md)
