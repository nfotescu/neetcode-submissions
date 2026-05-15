class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const tLength = t.length
        if(s.length !== tLength) {
            return false
        }
        const map:Record<string, number> = {}
        for (let i = 0; i < tLength; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1
            map[t[i]] = (map[t[i]] || 0) - 1
        }

        

        return Object.values(map).every(v => v === 0)
    }
}
