import java.util.Scanner;

/**
 * Day 1 Accenture Patterns - standalone classroom solution.
 * Input: positive divisor n, then positive range limit m.
 * Example input: 3 10
 * Example output: 19
 */
public class DifferenceOfSums {

    /**
     * Q1: For positive divisor n and limit m, return the sum of values in
     * 1..m not divisible by n, minus the sum of values divisible by n.
     * Pattern: classify each value, then accumulate into one of two totals.
     * Invariant: the totals describe exactly the values already visited.
     * Time O(m), extra space O(1). Use a loop to teach the pattern first.
     * Reported source:
     * https://www.naukri.com/code360/interview-experiences/accenture/accenture-interview-experience-by-b-raju-associate-software-engineer-aug-2022-exp-0-2-years
     */
    public static long differenceOfSums(int n, int m) {
        long divisible = 0;
        long notDivisible = 0;

        for (long value = 1; value <= m; value++) {
            if (value % n == 0) {
                divisible += value;
            } else {
                notDivisible += value;
            }
        }
        // The question asks for a signed difference, not an absolute difference.
        return notDivisible - divisible;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int divisor = input.nextInt();
        int limit = input.nextInt();
        System.out.println(differenceOfSums(divisor, limit));
    }
}
