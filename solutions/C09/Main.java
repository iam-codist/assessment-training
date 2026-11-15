/* C09 — reference implementation.
 * Input/output: Read base1 numeral1, then base2 numeral2. Print LESS, EQUAL or GREATER. Values fit
 * signed 64-bit. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int b1 = in.nextInt();
        String a = in.next();
        int b2 = in.nextInt();
        String b = in.next();
        long x = Long.parseLong(a, b1), y = Long.parseLong(b, b2);
        out(x < y ? "LESS" : x > y ? "GREATER" : "EQUAL");
    }
}
