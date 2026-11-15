/* LC49 — reference implementation.
 * Input/output: Read n, then n lowercase English words, one per line (a word may be empty). Print
 * groups as JSON arrays, ordered by sorted-letter key; retain input order inside each group.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static String line() { return in.hasNextLine() ? in.nextLine() : ""; }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        in.nextLine();
        Map<String, List<String>> groups = new TreeMap<>();
        for (int i = 0; i < n; i++) {
            String word = line();
            char[] letters = word.toCharArray();
            Arrays.sort(letters);
            String key = new String(letters);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        for (List<String> group : groups.values()) {
            System.out.print("[");
            for (int j = 0; j < group.size(); j++) {
                if (j > 0)
                    System.out.print(",");
                System.out.print("\"" + group.get(j) + "\"");
            }
            out("]");
        }
    }
}
