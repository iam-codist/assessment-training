/* LC189 — reference implementation.
 * Input/output: Read positive n and nonnegative k, then n integers. Print the array after rotating
 * right by k. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
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
    static void printArray(long[] a) {
        StringJoiner result = new StringJoiner(" ");
        for (long x : a)
            result.add(Long.toString(x));
        System.out.println(result);
    }
    static void reverse(long[] a, int l, int r) {
        while (l < r) {
            long t = a[l];
            a[l++] = a[r];
            a[r--] = t;
        }
    }
    public static void main(String[] args) {
        int n = (int)num(), k = (int)(num() % n);
        long[] a = array(n);
        reverse(a, 0, n - 1);
        reverse(a, 0, k - 1);
        reverse(a, k, n - 1);
        printArray(a);
    }
}
