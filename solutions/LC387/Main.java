/* LC387 — reference implementation.
 * Input/output: Read a lowercase English string. Print the zero-based index of its first unique
 * character, or -1. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String s = line();
        int[] count = new int[26];
        int answer = -1;
        for (char c : s.toCharArray())
            count[c - 'a']++;
        for (int i = 0; i < s.length(); i++)
            if (count[s.charAt(i) - 'a'] == 1) {
                answer = i;
                break;
            }
        out(answer);
    }
}
