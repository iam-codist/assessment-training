/* C07 — reference implementation.
 * Input/output: Read n and n integers. Print the absolute difference of sums at even and odd
 * indices. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        long balance = 0;
        for (int i = 0; i < n; i++) {
            long x = num();
            balance += i % 2 == 0 ? x : -x;
        }
        out(Math.abs(balance));
    }
}
