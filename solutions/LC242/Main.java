/* LC242 — reference implementation.
 * Input/output: Read two lowercase English strings, one per line. Print true or false for anagrams.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        String a = line(), b = line();
        int[] count = new int[26];
        for (char c : a.toCharArray())
            count[c - 'a']++;
        for (char c : b.toCharArray())
            count[c - 'a']--;
        boolean ok = true;
        for (int x : count)
            if (x != 0)
                ok = false;
        out(ok);
    }
}
