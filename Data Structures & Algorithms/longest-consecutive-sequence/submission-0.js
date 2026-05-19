class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0;
        let length = 0;
        let current;
        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] -1)) {
                current = nums[i];
                length = 1;
                while (set.has(current + 1)) {
                    current++;
                    length++;
                    
                }
                max = Math.max(max, length);
            }
        }

        return max;
    }
}
