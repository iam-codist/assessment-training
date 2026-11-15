/* C04 — reference implementation.
 * Input/output: Read one complete line, preserving spaces. Print VALID or INVALID.
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
        int digits = 0;
        boolean ok =
            s.length() >= 6 && s.length() <= 12 && s.charAt(0) >= 'a' && s.charAt(0) <= 'z';
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= '0' && c <= '9')
                digits++;
            if (!((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '_'))
                ok = false;
            if (i > 0 && c == '_' && s.charAt(i - 1) == '_')
                ok = false;
        }
        ok = ok && digits >= 2 && !s.endsWith("_");
        out(ok ? "VALID" : "INVALID");
    }
}
