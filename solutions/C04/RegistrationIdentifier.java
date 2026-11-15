import java.util.Scanner;

public class RegistrationIdentifier {
    static boolean isValid(String s) {
        if (s.length() < 6 || s.length() > 12) {
            return false;
        }
        char first = s.charAt(0);
        if (first < 'a' || first > 'z') {
            return false;
        }
        if (s.endsWith("_") || s.contains("__")) {
            return false;
        }
        int digits = 0;
        for (char ch : s.toCharArray()) {
            boolean letter = ch >= 'a' && ch <= 'z';
            boolean digit = ch >= '0' && ch <= '9';
            if (!(letter || digit || ch == '_')) {
                return false;
            }
            if (digit) {
                digits++;
            }
        }
        return digits >= 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String candidate = sc.hasNextLine() ? sc.nextLine() : "";
        System.out.println(isValid(candidate) ? "VALID" : "INVALID");
    }
}
