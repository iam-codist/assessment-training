/* LC11 — reference implementation.
 * Input/output: Read n (at least 2), then n nonnegative heights. Print maximum container area.
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
        int l = 0, r = n - 1;
        long best = 0;
        while (l < r) {
            best = Math.max(best, (r - l) * Math.min(a[l], a[r]));
            if (a[l] < a[r])
                l++;
            else
                r--;
        }
        out(best);
    }
}
