/* C20 — reference implementation.
 * Input/output: Read two digit strings on separate lines. Print MATCH or DIFFERENT; leading zeros
 * count. Assumes valid input within the lesson constraints. Run instructions: see SOLUTIONS.md in
 * the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String a = line(), b = line();
        int[] count = new int[10];
        for (char c : a.toCharArray())
            count[c - '0']++;
        for (char c : b.toCharArray())
            count[c - '0']--;
        boolean ok = true;
        for (int x : count)
            if (x != 0)
                ok = false;
        out(ok ? "MATCH" : "DIFFERENT");
    }
}
