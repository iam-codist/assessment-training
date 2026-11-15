/* LC414 — reference implementation.
 * Input/output: Read positive n and n integers. Print third-largest distinct value, or the maximum
 * if fewer than three exist. Assumes valid input within the lesson constraints. Run instructions:
 * see SOLUTIONS.md in the repository root.
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
        int distinct = 1;
        long answer = a[n - 1];
        for (int i = n - 2; i >= 0; i--)
            if (a[i] != a[i + 1] && ++distinct == 3) {
                answer = a[i];
                break;
            }
        out(answer);
    }
}
