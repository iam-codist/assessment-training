/* LC2894 — reference implementation.
 * Input/output: Read range limit n, then divisor m (the reverse of D01). Print nondivisible-sum
 * minus divisible-sum. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        long limit = num(), divisor = num(), total = 0;
        for (long x = 1; x <= limit; x++)
            total += x % divisor == 0 ? -x : x;
        out(total);
    }
}
