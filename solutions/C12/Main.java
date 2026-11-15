/* C12 — reference implementation.
 * Input/output: Read nonnegative k on the first line and the complete text on the next line. Print
 * the shifted text. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int k = (int)(num() % 26);
        in.nextLine();
        String s = line();
        StringBuilder r = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (c >= 'a' && c <= 'z')
                c = (char)('a' + (c - 'a' + k) % 26);
            else if (c >= 'A' && c <= 'Z')
                c = (char)('A' + (c - 'A' + k) % 26);
            r.append(c);
        }
        out(r);
    }
}
