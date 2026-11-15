/* C03 — reference implementation.
 * Input/output: Read q pairs of nonnegative integers. Print YES or NO for each pair.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int q = (int)num();
        while (q-- > 0) {
            long a = num(), b = num();
            out(Long.bitCount(a) == Long.bitCount(b) ? "YES" : "NO");
        }
    }
}
