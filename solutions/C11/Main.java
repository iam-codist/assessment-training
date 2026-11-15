/* C11 — reference implementation.
 * Input/output: Read a nonempty digit string. Print its weighted checksum modulo 10.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String s = line();
        int total = 0;
        for (int i = 0; i < s.length(); i++)
            total = (total + (s.charAt(i) - '0') * (i % 2 == 0 ? 3 : 1)) % 10;
        out(total);
    }
}
