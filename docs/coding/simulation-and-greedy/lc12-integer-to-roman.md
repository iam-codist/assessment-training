<!-- Generated from content/coding/simulation-and-greedy/lc12-integer-to-roman.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** LC12 · **Practice type:** Worked solution

# Integer to Roman

## Question

Convert an integer from 1 through 3999 into a Roman numeral using standard subtractive pairs.

## Example 1

**Input**

```text
3749
```

**Output**

```text
MMMDCCXLIX
```

## Notes

Correction preserved: the posted failing values tail 10,5,4,9,1 did not align with X,IX,V,IV,I. Use 10,9,5,4,1.

<details>
<summary>Show answer and explanation</summary>

## Answer

Use the following algorithm to produce the result for any input that satisfies the question rules.

## Explanation

Use aligned descending tables: values [1000,900,500,400,100,90,50,40,10,9,5,4,1]; symbols [M,CM,D,CD,C,XC,L,XL,X,IX,V,IV,I]. Repeatedly append the current symbol while its value fits, then subtract.

## Solutions in four languages

These standalone programs use the same input and output contract. Choose a language on the website, or open a source file below.

Read an integer from 1 through 3999. Print its Roman numeral.

**Sample program input**

```text
3749
```

**Sample program output**

```text
MMMDCCXLIX
```

- [C source](../../../solutions/LC12/solution.c)
- [C++ source](../../../solutions/LC12/solution.cpp)
- [Python source](../../../solutions/LC12/solution.py)
- [Java source](../../../solutions/LC12/Main.java)

[How to compile and run these examples](../../../SOLUTIONS.md).

</details>

---

[← C18](c18-grid-delivery-route.md) · [Topic index](README.md) · [LC1518 →](lc1518-water-bottles.md)
