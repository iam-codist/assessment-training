/* DP02 — reference implementation.
 * Input/output: Read coin count n and amount (0 through 10000), then n positive coin values. Print
 * minimum coins with unlimited reuse, or -1. Assumes valid input within the lesson constraints. Run
 * instructions: see SOLUTIONS.md in the repository root.
 */
import java.util.*;
public class Main {
    static Scanner in = new Scanner(System.in);
    static long num() { return in.nextLong(); }
    static long[] array(int n) {
        long[] a = new long[n];
        for (int i = 0; i < n; i++)
            a[i] = num();
        return a;
    }
    static void out(Object value) { System.out.println(value); }

    public static void main(String[] args) {
        int n = (int)num(), amount = (int)num();
        long[] coins = array(n);
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int total = 1; total <= amount; total++)
            for (long coin : coins)
                if (coin <= total)
                    dp[total] = Math.min(dp[total], dp[total - (int)coin] + 1);
        out(dp[amount] > amount ? -1 : dp[amount]);
    }
}
