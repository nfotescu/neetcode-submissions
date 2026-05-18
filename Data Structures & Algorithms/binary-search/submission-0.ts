class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length - 1;
        let middle = Math.floor(end / 2);

        while (start <= end) {
            let middle = Math.floor(start + end / 2);
            if (nums[middle] > target) {
                end--;
            } else {
                start++;
            }
            if(nums[middle] === target) {
                return middle
            }
        }

        return -1;
    }
}
