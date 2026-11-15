/* DP01 — reference implementation.
 * Input/output: Read n from 0 through 90. Print ways to climb n steps using moves of 1 or 2 steps.
 * There is one empty way for n=0. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        long previous = 1, current = 1;
        for (int step = 2; step <= n; step++) {
            long next = previous + current;
            previous = current;
            current = next;
        }
        out(current);
    }
}
