/* DP03 — reference implementation.
 * Input/output: Read two ASCII strings on separate lines, at most 1000 characters each. Print the
 * longest common subsequence length. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String a = line(), b = line();
        int[] previous = new int[b.length() + 1], current = new int[b.length() + 1];
        for (char x : a.toCharArray()) {
            current[0] = 0;
            for (int j = 1; j <= b.length(); j++)
                current[j] = x == b.charAt(j - 1) ? previous[j - 1] + 1
                                                  : Math.max(previous[j], current[j - 1]);
            int[] temp = previous;
            previous = current;
            current = temp;
        }
        out(previous[b.length()]);
    }
}
