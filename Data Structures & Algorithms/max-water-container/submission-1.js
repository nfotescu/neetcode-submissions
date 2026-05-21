class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let wall1 = 0;
        let wall2 = heights.length - 1;
        let max = 0;
        while (wall1 < wall2) {
            const diff = wall2 - wall1;
            let water = Math.min(heights[wall1], heights[wall2]) * diff;
            max = Math.max(max, water);
            if (heights[wall2] < heights[wall1]) {
                wall2--;
            } else {
                wall1++
            }
        }

        return max;
    }
}
