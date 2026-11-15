/* LC9 — reference implementation.
 * Input/output: Read a signed 32-bit integer. Print true if its decimal representation is a
 * palindrome, otherwise false. Assumes valid input within the lesson constraints. Run instructions:
 * see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        long n = num();
        String s = Long.toString(n);
        out(n >= 0 && s.equals(new StringBuilder(s).reverse().toString()));
    }
}
