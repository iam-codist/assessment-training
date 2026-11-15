/* F01 — reference implementation.
 * Input/output: Read positive n and k (1 through n), then n integers. Print the maximum sum over
 * exactly k consecutive elements. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
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
        int n = (int)num(), k = (int)num();
        long[] a = array(n);
        long window = 0;
        for (int i = 0; i < k; i++)
            window += a[i];
        long best = window;
        for (int r = k; r < n; r++) {
            window += a[r] - a[r - k];
            best = Math.max(best, window);
        }
        out(best);
    }
}
