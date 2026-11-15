/* C05 — reference implementation.
 * Input/output: Read n and target, then n integers. Print value and zero-based index; keep the
 * earliest tie. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
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
        long t = num();
        long[] a = array(n);
        int best = 0;
        for (int i = 1; i < n; i++)
            if (Math.abs(a[i] - t) < Math.abs(a[best] - t))
                best = i;
        out(a[best] + " " + best);
    }
}
