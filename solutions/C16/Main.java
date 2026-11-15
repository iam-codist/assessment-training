/* C16 — reference implementation.
 * Input/output: Read r and c, then r rows of c integers. Print the earliest best-row index and row
 * sum. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in the
 * repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int r = (int)num(), c = (int)num(), index = 0;
        long best = Long.MIN_VALUE;
        for (int i = 0; i < r; i++) {
            long sum = 0;
            for (int j = 0; j < c; j++)
                sum += num();
            if (i == 0 || sum > best) {
                best = sum;
                index = i;
            }
        }
        out(index + " " + best);
    }
}
