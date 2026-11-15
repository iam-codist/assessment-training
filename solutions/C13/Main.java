/* C13 — reference implementation.
 * Input/output: Read q, then q commands (SET/ADD/SUB/MUL and an integer). Print the final
 * accumulator. Assumes valid input within the lesson constraints. Run instructions: see
 * SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int q = (int)num();
        long v = 0;
        while (q-- > 0) {
            String op = in.next();
            long x = num();
            switch (op) {
            case "SET":
                v = x;
                break;
            case "ADD":
                v += x;
                break;
            case "SUB":
                v -= x;
                break;
            case "MUL":
                v *= x;
                break;
            }
        }
        out(v);
    }
}
