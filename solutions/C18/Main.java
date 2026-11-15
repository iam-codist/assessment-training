/* C18 — reference implementation.
 * Input/output: Read n, then n coordinate pairs. Print total Manhattan distance including the
 * return to the origin. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        long x = 0, y = 0, total = 0;
        while (n-- > 0) {
            long nx = num(), ny = num();
            total += Math.abs(nx - x) + Math.abs(ny - y);
            x = nx;
            y = ny;
        }
        out(total + Math.abs(x) + Math.abs(y));
    }
}
