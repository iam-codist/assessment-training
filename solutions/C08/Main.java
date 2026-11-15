/* C08 — reference implementation.
 * Input/output: Read n and budget, then n prices. Print minimum-total and change, or IMPOSSIBLE.
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
        long b = num();
        long[] a = array(n);
        Arrays.sort(a);
        if (n < 3 || a[0] + a[1] + a[2] > b)
            out("IMPOSSIBLE");
        else {
            long s = a[0] + a[1] + a[2];
            out(s + " " + (b - s));
        }
    }
}
