class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = {}
        let count = 0
        for (let i= 0; i < nums.length; i++) {
            if(map[nums[i]] >= 0 ) {
                return [map[nums[i]], i]
            }
            count = target - nums[i]
            map[count] = i
        }
    }
}
