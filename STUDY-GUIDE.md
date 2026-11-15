# Suggested study order

Work through a topic without looking at its answers, then review the explanation. Keep a small error log with the question ID, your mistake and the rule you will use next time.

## 1. Trace the basics

Start with assignments, conditions and simple loops. Write a table with one row per iteration and one column per variable. Trace the last iteration carefully.

[Conditional warm-up](docs/pseudocode/conditionals/e01-conditional-warm-up.md), [Loop warm-up](docs/pseudocode/loops/e02-loop-sum-warm-up.md), [Nested loops](docs/pseudocode/loops/m01-nested-loops.md), [While-loop trace](docs/pseudocode/loops/m20-complex-while-loop.md).

## 2. Learn arrays, strings and counting

A scan preserves input order. Distinct values and frequencies solve different problems. Identify which one the statement asks for before choosing a set, counter or running maximum.

[Difference of Sums](docs/coding/number-operations/d01-difference-of-sums.md), [Second Distinct Maximum](docs/coding/array-scanning/d02-second-largest-element.md), [Distinct Characters](docs/coding/hashing-and-counting/d03-distinct-character-count.md), [First Unique Character](docs/coding/hashing-and-counting/lc387-first-unique-character-in-a-string.md), [Valid Anagram](docs/coding/hashing-and-counting/lc242-valid-anagram.md).

## 3. Explain efficient array patterns

| Pattern | Main idea | When it helps |
| --- | --- | --- |
| Two pointers | Advance one or both ends while preserving a useful invariant | Palindromes, sorted squares, containers and in-place rearrangement |
| Fixed sliding window | Remove the outgoing value and add the incoming one | Exactly `k` consecutive elements |
| Variable sliding window | Expand right and move left until the window is valid | Longest substring, bounded zero count, positive target sums |
| Kadane | At each element, restart or extend the current subarray | Maximum nonempty contiguous sum |

[Container With Most Water](docs/coding/two-pointers/lc11-container-with-most-water.md), [Fixed Window Sum](docs/coding/sliding-window/f01-maximum-sum-subarray-of-size-k.md), [Longest Unique Substring](docs/coding/sliding-window/lc3-longest-substring-without-repeating-characters.md), [Maximum Subarray](docs/coding/maximum-subarray/lc53-maximum-subarray.md), [Circular Maximum Subarray](docs/coding/maximum-subarray/lc918-maximum-sum-circular-subarray.md).

## 4. Revisit binary, functions and recursion

Use small binary representations for bitwise problems. For recursion, write the base case and each returned value. For references, track whether two names point to the same object.

[AND and XOR](docs/pseudocode/bitwise/m02-bitwise-and-and-xor.md), [Bitwise Identity](docs/pseudocode/bitwise/e07-recover-xor-using-addition-and-and.md), [Recursive Return](docs/pseudocode/recursion/m05-recursion.md), [Object References](docs/pseudocode/functions-and-references/p21-object-references.md).

## 5. Practise technical MCQs by topic

Read the complete scenario, eliminate choices that contradict it and explain why your selected option fits. Use the [technical topic index](docs/technical-mcqs/README.md) for Excel, office tools, networking, cloud, security and database keys.

## 6. Build accuracy in cognitive practice

Begin without a timer. Write arithmetic values before sorting bubbles. For routes, track location plus any collected key or required visit. For shape tasks, compare each row or track a distinctive corner through the transformation. Add timing only after your reasoning is consistent.

Use the [cognitive topic index](docs/cognitive/README.md). Memory panels must be closed before recall. Visual entries marked `needs-review` are discussions, not verified tests.

## A repeatable practice session

1. Review one concept and explain it aloud.
2. Solve a few questions from that topic without answers.
3. Check the explanations and record the reason for each mistake.
4. Redo missed questions later with a fresh trace or implementation.

[Browse every topic](docs/README.md) · [Conventions and corrections](CONVENTIONS.md)
