/* C10 — reference implementation.
 * Input/output: Read one complete label line. Print the normalized label, or EMPTY.
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
        StringBuilder r = new StringBuilder();
        boolean pending = false;
        for (char c : s.toCharArray()) {
            if (c == '-' || c == '_')
                pending = r.length() > 0;
            else {
                if (pending)
                    r.append('-');
                r.append(c);
                pending = false;
            }
        }
        out(r.length() == 0 ? "EMPTY" : r);
    }
}
