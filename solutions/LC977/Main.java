/* LC977 — reference implementation.
 * Input/output: Read n and a sorted array of n integers. Print squares in nondecreasing order.
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
    static void printArray(long[] a) {
        StringJoiner result = new StringJoiner(" ");
        for (long x : a)
            result.add(Long.toString(x));
        System.out.println(result);
    }

    public static void main(String[] args) {
        int n = (int)num();
        long[] a = array(n), result = new long[n];
        int l = 0, r = n - 1;
        for (int i = n - 1; i >= 0; i--) {
            if (Math.abs(a[l]) > Math.abs(a[r])) {
                result[i] = a[l] * a[l];
                l++;
            } else {
                result[i] = a[r] * a[r];
                r--;
            }
        }
        printArray(result);
    }
}
