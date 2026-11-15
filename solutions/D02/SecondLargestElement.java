import java.util.Scanner;

/**
 * Day 1 Accenture Patterns - standalone classroom solution.
 * Input: array size n, followed by n integers.
 * Example input: 5 followed by 8 2 8 5 1
 * Example output: 5
 */
public class SecondLargestElement {

    /**
     * Q2: Return the second-largest DISTINCT int in the array, or -1 if absent.
     * Classroom contract: null/empty arrays also return -1.
     * Pattern: keep the two best distinct values seen so far.
     * Invariant: largest and second describe the processed prefix.
     * Time O(n), extra space O(1); input order is unchanged.
     * Reported source:
     * https://www.naukri.com/code360/interview-experiences/accenture/accenture-interview-experience-on-campus-sep-2024
     */
    public static int secondLargest(int[] values) {
        if (values == null) {
            return -1;
        }

        // A long sentinel lies below EVERY possible int, including Integer.MIN_VALUE.
        long largest = Long.MIN_VALUE;
        long second = Long.MIN_VALUE;

        for (int value : values) {
            if (value > largest) {
                second = largest;  // Save the old largest before replacing it.
                largest = value;
            } else if (value < largest && value > second) {
                second = value;
            }
        }
        return second == Long.MIN_VALUE ? -1 : (int) second;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int size = input.nextInt();
        int[] values = new int[size];
        for (int i = 0; i < size; i++) {
            values[i] = input.nextInt();
        }
        System.out.println(secondLargest(values));
    }
}
