/* C19 — reference implementation.
 * Input/output: Read n and n integers. Print second-distinct-maximum and frequency, or NONE.
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
        Arrays.sort(a);
        int i = n - 1;
        while (i >= 0 && a[i] == a[n - 1])
            i--;
        if (i < 0)
            out("NONE");
        else {
            long second = a[i];
            int count = 0;
            while (i >= 0 && a[i] == second) {
                count++;
                i--;
            }
            out(second + " " + count);
        }
    }
}
