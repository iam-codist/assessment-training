/* C14 — reference implementation.
 * Input/output: Read positive n. Print odd-part and exponent-of-two.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        long n = num();
        int k = 0;
        while (n % 2 == 0) {
            n /= 2;
            k++;
        }
        out(n + " " + k);
    }
}
