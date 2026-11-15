<!-- Generated from content/coding/maximum-subarray/lc53-maximum-subarray.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC53 · **Practice type:** Worked solution

# Maximum Subarray

## Question

For a nonempty integer array, find the greatest sum of any contiguous nonempty subarray. The extended version also reports the start index, end index and actual subarray.

## Example 1

**Input**

```text
[-2,1,-3,4,-1,2,1,-5,4]; [4,-6,3,2]; [-5,-2,-8]
```

**Output**

```text
6 from indices 3..6 [4,-1,2,1]; 5 from indices 2..3 [3,2]; -2
```

## Notes

Repeated discussions consolidated here; both sum-only and index-returning variants are preserved.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Teach O(n³) brute force, then O(n²) running sums, then O(n) Kadane: current = max(value,current+value), best = max(best,current). Initialize from the first element. Track tempStart/start/end for the extended version.

## Solutions in four languages

The four reference programs print the maximum sum. For the separately discussed version that also returns indices and the subarray, see the [extended Java example](../../../solutions/LC53/Solution.java).

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read positive n and n integers. Print the maximum sum of a nonempty contiguous subarray.

**Sample program input**

```text
9
-2 1 -3 4 -1 2 1 -5 4
```

**Sample program output**

```text
6
```

- [C source](../../../solutions/LC53/solution.c)
- [C++ source](../../../solutions/LC53/solution.cpp)
- [Python source](../../../solutions/LC53/solution.py)
- [Java source](../../../solutions/LC53/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md). These implementations were added for this update.

</details>

---

[Topic index](README.md) · [LC918 →](lc918-maximum-sum-circular-subarray.md)
