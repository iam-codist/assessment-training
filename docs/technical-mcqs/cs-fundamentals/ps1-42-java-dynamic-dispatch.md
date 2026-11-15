<!-- Generated from content/technical-mcqs/cs-fundamentals/ps1-42-java-dynamic-dispatch.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** PS1-42 · **Practice type:** Worked solution

# Java dynamic dispatch

## Question

In Java, Animal a = new Dog(); then a.speak() is called. Dog overrides the public instance method speak(). Which implementation runs?

## Options

| Option | Answer choice |
| --- | --- |
| A | Animal.speak() |
| B | Both methods automatically |
| C | Dog.speak() |
| D | The code cannot compile |

<details>
<summary>Show answer and explanation</summary>

## Answer

C. Dog.speak()

## Explanation

Java dynamically dispatches overridden instance methods according to the object's type.

</details>

## Source context

Assessment practice set 1, question 42.

---

[← PS1-41](ps1-41-encapsulating-account-state.md) · [Topic index](README.md) · [PS1-43 →](ps1-43-finding-an-array-maximum.md)
