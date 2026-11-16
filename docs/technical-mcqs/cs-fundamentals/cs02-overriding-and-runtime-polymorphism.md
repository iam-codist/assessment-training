<!-- Generated from content/technical-mcqs/cs-fundamentals/cs02-overriding-and-runtime-polymorphism.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** CS02 · **Practice type:** Worked solution

# Overriding and runtime polymorphism

## Question

A Shape reference points to a Circle object. Calling an overridden draw method uses Circle.draw. Which idea explains this?

## Options

| Option | Answer choice |
| --- | --- |
| A | Method overloading based only on argument count |
| B | Runtime polymorphism through overriding |
| C | Sorting by object name |
| D | Static variable initialization |

<details>
<summary>Show answer and explanation</summary>

## Answer

B. Runtime polymorphism through overriding.

## Explanation

The runtime object determines the implementation for an overridden instance method. Overloading instead selects among different parameter lists according to the language rules. Static methods do not use the same dynamic dispatch rule as overridden instance methods.

</details>

---

[← CS01](cs01-encapsulation-and-a-bank-account.md) · [Topic index](README.md) · [CS03 →](cs03-processes-and-threads.md)
