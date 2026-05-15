class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Record<number, number> = {};

        // count frequencies
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        // index = frequency
        // value = array of numbers with that frequency
        const bucket: number[][] = [];

        for (const [num, freq] of Object.entries(map)) {
            if (bucket[freq]) {
                bucket[freq].push(+num);
            } else {
                bucket[freq] = [+num];
            }
        }

        const result: number[] = [];

        // walk from highest frequency to lowest
        for (let j = bucket.length - 1; j >= 0; j--) {
            if (!bucket[j]) continue;

            result.push(...bucket[j]);

            if (result.length >= k) {
                return result.slice(0, k);
            }
        }

        return result;
    }
}
