class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        let current = 0;
        let result = [];
        for (current; current < sorted.length; current++) {
            if (current > 0 && sorted[current] === sorted[current - 1]) continue;
            let start = current + 1;
            let end = sorted.length - 1;
            let sum = -sorted[current];
            while (start < end) {
                if (sorted[start] + sorted[end] > sum) {
                    end--;
                } else if (sorted[start] + sorted[end] < sum) {
                    start++;
                } else {
                    result.push([sorted[current], sorted[start], sorted[end]]);
                    start++;
                    end--;

                    while (start < end && sorted[start] === sorted[start - 1]) start++;
                    while (start < end && sorted[end] === sorted[end + 1]) end--;
                }
            }
        }

        return result;
    }
}
