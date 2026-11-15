/* C02 — reference implementation.
 * Input/output: Read n and capacity, then n order sizes. Print accepted-count and
 * remaining-capacity. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        long left = num();
        int count = 0;
        for (int i = 0; i < n; i++) {
            long x = num();
            if (x > left)
                break;
            left -= x;
            count++;
        }
        out(count + " " + left);
    }
}
