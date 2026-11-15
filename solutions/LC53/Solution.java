class Solution {
    public int maxSubArray(int[] nums) {
        int endingHere = nums[0];
        int best = nums[0];
        for (int i = 1; i < nums.length; i++) {
            // Start here, or extend the previous subarray.
            endingHere = Math.max(nums[i], endingHere + nums[i]);
            best = Math.max(best, endingHere);
        }
        return best;
    }
}
