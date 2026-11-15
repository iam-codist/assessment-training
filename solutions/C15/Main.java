/* C15 — reference implementation.
 * Input/output: Read n, followed by the n−1 supplied roll numbers. Print the missing number.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        long n = num(), missing = n * (n + 1) / 2;
        for (long i = 0; i < n - 1; i++)
            missing -= num();
        out(missing);
    }
}
