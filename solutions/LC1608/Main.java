/* LC1608 — reference implementation.
 * Input/output: Read n and n nonnegative integers. Print x if exactly x elements are at least x,
 * otherwise -1. Assumes valid input within the lesson constraints. Run instructions: see
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
        long[] a = array(n);
        Arrays.sort(a);
        int answer = -1;
        for (int x = 1; x <= n; x++)
            if (a[n - x] >= x && (n == x || a[n - x - 1] < x)) {
                answer = x;
                break;
            }
        out(answer);
    }
}
