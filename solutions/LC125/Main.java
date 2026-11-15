/* LC125 — reference implementation.
 * Input/output: Read one ASCII line. Ignore non-alphanumeric characters and case; print true or
 * false for palindrome. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String s = line();
        int l = 0, r = s.length() - 1;
        boolean ok = true;
        while (l < r) {
            if (!Character.isLetterOrDigit(s.charAt(l))) {
                l++;
                continue;
            }
            if (!Character.isLetterOrDigit(s.charAt(r))) {
                r--;
                continue;
            }
            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) {
                ok = false;
                break;
            }
            l++;
            r--;
        }
        out(ok);
    }
}
