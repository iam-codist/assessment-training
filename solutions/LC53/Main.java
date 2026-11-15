/* LC53 — reference implementation.
 * Input/output: Read positive n and n integers. Print the maximum sum of a nonempty contiguous
 * subarray. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
 * in the repository root.
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
        long current = a[0], best = a[0];
        for (int i = 1; i < n; i++) {
            current = Math.max(a[i], current + a[i]);
            best = Math.max(best, current);
        }
        out(best);
    }
}
