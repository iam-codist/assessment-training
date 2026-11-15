/* LC1004 — reference implementation.
 * Input/output: Read n and nonnegative k, then n binary values. Print the longest window with at
 * most k zeros. Assumes valid input within the lesson constraints. Run instructions: see
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
        int n = (int)num(), k = (int)num();
        long[] a = array(n);
        int l = 0, zeros = 0, best = 0;
        for (int r = 0; r < n; r++) {
            if (a[r] == 0)
                zeros++;
            while (zeros > k) {
                if (a[l] == 0)
                    zeros--;
                l++;
            }
            best = Math.max(best, r - l + 1);
        }
        out(best);
    }
}
