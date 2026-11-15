// LeetCode 414: Third Maximum Number
// Pattern: Track the best distinct values
class Solution {
    public int thirdMax(int[] nums) {
        long first = Long.MIN_VALUE;
        long second = Long.MIN_VALUE;
        long third = Long.MIN_VALUE;
        for (int value : nums) {
            if (value == first || value == second || value == third) continue;
            if (value > first) {
                third = second;
                second = first;
                first = value;
            } else if (value > second) {
                third = second;
                second = value;
            } else if (value > third) {
                third = value;
            }
        }
        return third == Long.MIN_VALUE ? (int) first : (int) third;
    }
}
