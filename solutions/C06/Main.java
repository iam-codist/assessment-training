/* C06 — reference implementation.
 * Input/output: Read L R a b. Print the sum of numbers divisible by exactly one divisor.
 * Assumes valid input within the lesson constraints.
 * Run instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        long l = num(), r = num(), a = num(), b = num(), sum = 0;
        for (long x = l; x <= r; x++)
            if ((x % a == 0) != (x % b == 0))
                sum += x;
        out(sum);
    }
}
