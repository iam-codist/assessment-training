/* LC3 — reference implementation.
 * Input/output: Read one ASCII text line. Print the length of the longest substring without a
 * repeated character. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String s = line();
        int[] last = new int[128];
        Arrays.fill(last, -1);
        int left = 0, best = 0;
        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            left = Math.max(left, last[c] + 1);
            last[c] = r;
            best = Math.max(best, r - left + 1);
        }
        out(best);
    }
}
