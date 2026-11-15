// LeetCode 2299: Strong Password Checker II
// Pattern: Boolean flags and early rejection
class Solution {
    public boolean strongPasswordCheckerII(String password) {
        if (password.length() < 8) return false;
        boolean lower = false, upper = false, digit = false, special = false;
        String allowedSpecials = "!@#$%^&*()-+";
        for (int i = 0; i < password.length(); i++) {
            char c = password.charAt(i);
            if (i > 0 && c == password.charAt(i - 1)) return false;
            if (c >= 'a' && c <= 'z') lower = true;
            else if (c >= 'A' && c <= 'Z') upper = true;
            else if (c >= '0' && c <= '9') digit = true;
            else if (allowedSpecials.indexOf(c) >= 0) special = true;
        }
        return lower && upper && digit && special;
    }
}
