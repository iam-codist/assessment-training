import java.util.Scanner;

/**
 * Day 1 Accenture Patterns - standalone classroom solution.
 * Input: one line containing only lowercase English letters (a..z).
 * A blank line represents the empty string.
 * Example input: banana
 * Example output: 3
 */
public class DistinctCharacterCount {

    /**
     * Q3: Count DISTINCT letters in a non-null string containing only a..z.
     * "banana" has 3 distinct letters, although only one letter appears once.
     * Classroom extension: the empty string returns 0.
     * Pattern: a presence table records whether each letter has appeared.
     * Invariant: seen[c] is true exactly when c occurs in the processed prefix.
     * Time O(n), extra space O(26) = O(1) for this fixed alphabet.
     * Reported source:
     * https://www.naukri.com/code360/interview-experiences/accenture-solutions-private-limited/accenture-interview-experience-by-amritesh-chandra-on-campus-aug-2024
     */
    public static int countDistinctLetters(String text) {
        boolean[] seen = new boolean[26];
        int distinct = 0;

        for (int i = 0; i < text.length(); i++) {
            int index = text.charAt(i) - 'a';
            if (!seen[index]) {
                seen[index] = true;
                distinct++;
            }
        }
        return distinct;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String text = input.nextLine();
        System.out.println(countDistinctLetters(text));
    }
}
