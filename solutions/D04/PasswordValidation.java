import java.util.Scanner;

/**
 * Day 1 Accenture Patterns - standalone classroom solution.
 * Input: the complete password on one line. Spaces must be preserved.
 * Uses the original Day 1 minimum length of 7 characters.
 * Example input: aB12_cd
 * Example output: 1
 */
public class PasswordValidation {

    /**
     * Q4: Return 1 for a valid password, otherwise 0. Classroom ASCII rules:
     * - At least 7 characters (this particular reported version uses SEVEN).
     * - At least one uppercase A..Z and at least one digit 0..9.
     * - No literal space or forward slash '/'.
     * - The first character cannot be a digit.
     * Null and empty strings are invalid.
     * Pattern: reject forbidden features immediately; remember required features.
     * Time O(n), extra space O(1).
     * Reported source:
     * https://www.naukri.com/code360/interview-experiences/accenture-solutions-private-limited/accenture-interview-experience-by-nilesh-raj-apr-2021-exp-0-2-years
     */
    public static int checkPassword(String password) {
        if (password == null || password.length() < 7) {
            return 0;
        }
        char first = password.charAt(0);
        if (first >= '0' && first <= '9') {
            return 0;
        }

        boolean hasDigit = false;
        boolean hasUppercase = false;

        for (int i = 0; i < password.length(); i++) {
            char c = password.charAt(i);
            if (c == ' ' || c == '/') {
                return 0;
            }
            if (c >= '0' && c <= '9') {
                hasDigit = true;
            }
            if (c >= 'A' && c <= 'Z') {
                hasUppercase = true;
            }
        }
        // Wait until the full scan ends: a forbidden character can occur later.
        return hasDigit && hasUppercase ? 1 : 0;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // nextLine() preserves spaces so the validation can reject them.
        String password = input.nextLine();
        System.out.println(checkPassword(password));
    }
}
