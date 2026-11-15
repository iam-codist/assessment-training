/* D04 — reference implementation.
 * Input/output: Read one ASCII password line. Apply the classroom rule (at least 7 characters);
 * print 1 or 0. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String s = line();
        boolean upper = false, digit = false,
                ok = s.length() >= 7 && !Character.isDigit(s.charAt(0));
        for (char c : s.toCharArray()) {
            upper |= c >= 'A' && c <= 'Z';
            digit |= c >= '0' && c <= '9';
            if (c == ' ' || c == '/')
                ok = false;
        }
        out(ok && upper && digit ? 1 : 0);
    }
}
