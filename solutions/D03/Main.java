/* D03 — reference implementation.
 * Input/output: Read a line of lowercase English letters. Print the number of distinct letters.
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
        boolean[] seen = new boolean[26];
        for (char c : s.toCharArray())
            seen[c - 'a'] = true;
        int total = 0;
        for (boolean x : seen)
            if (x)
                total++;
        out(total);
    }
}
