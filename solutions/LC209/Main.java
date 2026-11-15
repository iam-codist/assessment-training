/* LC209 — reference implementation.
 * Input/output: Read n and a positive target, then n positive integers. Print the shortest window
 * with sum at least target, or 0. Assumes valid input within the lesson constraints. Run
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
        int n = (int)num();
        long target = num();
        long[] a = array(n);
        int l = 0, best = n + 1;
        long sum = 0;
        for (int r = 0; r < n; r++) {
            sum += a[r];
            while (sum >= target) {
                best = Math.min(best, r - l + 1);
                sum -= a[l++];
            }
        }
        out(best == n + 1 ? 0 : best);
    }
}
