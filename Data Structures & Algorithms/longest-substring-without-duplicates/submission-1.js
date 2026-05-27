class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        const set = new Set();
        let left = 0;
        let right = 0;
        while (right < s.length) {
            const c = s[right]   
            if(!set.has(c)) {
                set.add(c)
                max = Math.max(max, set.size)
                right++
            } else {
                while (set.has(c)) {
                    set.delete(s[left])
                    left++
                }
            }
        }

        return max
    }
}
