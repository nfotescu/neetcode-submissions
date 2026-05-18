class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix = []
        const suffix = []
        const result = []
        for (let i=nums.length-1; i > 0; i--) {
            suffix[i] = i < nums.length -1 ? nums[i + 1]*suffix[i+1] : 1
        }
        for (let i=0; i < nums.length; i++) {
            prefix[i] = i > 0 ? prefix[i-1] * nums[i-1] : 1
            suffix[i] = i < nums.length -1 ? nums[i + 1]*suffix[i+1] : 1
            result[i] = prefix[i] * suffix[i]
        }

        return result
    }
}
