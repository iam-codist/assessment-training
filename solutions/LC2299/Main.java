/* LC2299 — reference implementation.
 * Input/output: Read an ASCII password line. Apply Strong Password Checker II rules and print true
 * or false. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md
 * in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String s = line(), special = "!@#$%^&*()-+";
        boolean low = false, up = false, digit = false, sym = false, ok = s.length() >= 8;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            low |= c >= 'a' && c <= 'z';
            up |= c >= 'A' && c <= 'Z';
            digit |= c >= '0' && c <= '9';
            sym |= special.indexOf(c) >= 0;
            if (i > 0 && c == s.charAt(i - 1))
                ok = false;
        }
        out(ok && low && up && digit && sym);
    }
}
