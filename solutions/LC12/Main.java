/* LC12 — reference implementation.
 * Input/output: Read an integer from 1 through 3999. Print its Roman numeral.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num();
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        StringBuilder answer = new StringBuilder();
        for (int i = 0; i < 13; i++)
            while (n >= values[i]) {
                answer.append(symbols[i]);
                n -= values[i];
            }
        out(answer);
    }
}
