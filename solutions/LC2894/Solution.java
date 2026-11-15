// LeetCode 2894: Divisible and Non-divisible Sums Difference
// Pattern: Conditional accumulation
class Solution {
    public int differenceOfSums(int n, int m) {
        int divisible = 0;
        int notDivisible = 0;
        for (int value = 1; value <= n; value++) {
            if (value % m == 0) divisible += value;
            else notDivisible += value;
        }
        return notDivisible - divisible;
    }
}
