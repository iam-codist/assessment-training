/* LC1518 — reference implementation.
 * Input/output: Read full bottle count and exchange rate (at least 2). Print total bottles drunk.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        long full = num(), rate = num(), total = full, empty = full;
        while (empty >= rate) {
            long next = empty / rate;
            total += next;
            empty = next + empty % rate;
        }
        out(total);
    }
}
