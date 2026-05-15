class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Record<number, number>={}

        for (let i = 0; i <nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
const entries = Object.entries(map).sort((a, b) => b[1] - a[1]).map(item => +item[0])

    return entries.slice(0, k)

}
}
