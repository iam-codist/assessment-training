/* LC918 — reference implementation.
 * Input/output: Read positive n and n integers. Print the maximum nonempty circular subarray sum.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
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
        long hi = a[0], lo = a[0], best = a[0], worst = a[0], total = a[0];
        for (int i = 1; i < n; i++) {
            hi = Math.max(a[i], hi + a[i]);
            lo = Math.min(a[i], lo + a[i]);
            best = Math.max(best, hi);
            worst = Math.min(worst, lo);
            total += a[i];
        }
        out(best < 0 ? best : Math.max(best, total - worst));
    }
}
