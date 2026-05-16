class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const need = {};
        const window = {};

        for (let i = 0; i < s1.length; i++) {
            need[s1[i]] = (need[s1[i]] || 0) + 1;
            window[s2[i]] = (window[s2[i]] || 0) + 1;
        }

        const isSame = () => {
            for (const key in need) {
                if (need[key] !== window[key]) {
                    return false;
                }
            }
            return true;
        };

        if (isSame()) return true;

     
        for (let right = s1.length; right < s2.length; right++) {
            const left = right - s1.length;

            window[s2[right]] = (window[s2[right]] || 0) + 1;

            window[s2[left]]--;

            if (window[s2[left]] === 0) {
                delete window[s2[left]];
            }

            if (isSame()) return true;
        }

        return false;
    }
}
