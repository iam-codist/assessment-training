# Run a coding solution

Every complete coding lesson has standalone reference programs in **C, C++, Python and Java**. On the website, open the answer and choose a language tab. Each program reads standard input and writes standard output. Copy the sample program input exactly; array brackets in an explanatory example are not part of the runnable input unless stated.

Use **C17**, **C++17**, **Python 3.10 or later**, or **Java 17 or later**. Java files are named `Main.java`. The programs assume valid inputs within the lesson’s constraints. They are learning references, not production input-validation libraries.

## Compile and run

Download the chosen file and place the example input in `input.txt` in the same folder. Run the matching commands from that folder.

### C

```sh
cc -std=c17 -O2 -Wall -Wextra solution.c -o solution
./solution < input.txt
```

### C++

```sh
c++ -std=c++17 -O2 -Wall -Wextra solution.cpp -o solution
./solution < input.txt
```

### Python

```sh
python3 solution.py < input.txt
```

### Java

```sh
javac Main.java
java Main < input.txt
```

C and C++ commands require a compiler such as Clang or GCC. Java compilation requires a JDK. On Windows, use a terminal with these tools installed and the equivalent executable invocation for your shell. The website displays and downloads code; it does not run it or install these tools.

## Learn from the comparison

1. Predict the result before running the example.
2. Follow the variables through one small input.
3. Change one condition: a duplicate, a tie, a boundary value or an empty string when allowed.
4. Explain the time and extra-space costs. Input storage and algorithm working space are different quantities.
5. Compare another language’s version only after you understand the first.

Some versions intentionally use different standard-library approaches, such as sorting instead of a distinct-value scan. Lesson notes identify relevant complexity differences. The original extended Java Kadane example also reports indices; the four standard references print the sum only.

## Maintaining the references

Programs live in `solutions/<question-id>/`. The manifest `solutions/index.json` supplies the language tabs. Keep all four files and their input contract aligned. Add independently checked sample and edge cases to `tests/solutions/cases.json`.

```sh
npm run test:solutions
```

The check compiles C17 and C++17 with warnings treated as errors, compiles Java for release 17, and runs the same cases in all four languages. GitHub Actions runs it before publishing. Test cases check examples and selected edges; they do not replace algorithm review or prove correctness for every input.

[Browse coding topics](docs/coding/README.md) · [Assessment roadmap](COVERAGE.md)
