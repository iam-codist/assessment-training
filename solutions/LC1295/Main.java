/* LC1295 — reference implementation.
 * Input/output: Read n followed by n positive integers. Print how many have an even number of
 * decimal digits. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num(), answer = 0;
        for (int i = 0; i < n; i++) {
            long x = num();
            int digits = 0;
            do {
                digits++;
                x /= 10;
            } while (x > 0);
            if (digits % 2 == 0)
                answer++;
        }
        out(answer);
    }
}
