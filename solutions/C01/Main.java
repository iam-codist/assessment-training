/* C01 — reference implementation.
 * Input/output: Read n, followed by n integers. Print the longest strictly increasing contiguous
 * length. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static long[] array(int n) {
        long[] a = new long[n];
        for (int i = 0; i < n; i++)
            a[i] = num();
        return a;
    }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        long[] a = array(n);
        int best = 1, run = 1;
        for (int i = 1; i < n; i++) {
            run = a[i] > a[i - 1] ? run + 1 : 1;
            best = Math.max(best, run);
        }
        out(best);
    }
}
