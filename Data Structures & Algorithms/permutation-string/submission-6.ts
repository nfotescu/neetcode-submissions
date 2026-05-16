class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const need = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        const getIndex = (char: string) => char.charCodeAt(0) - 97;

        // build counts for s1 and first window of s2
        for (let i = 0; i < s1.length; i++) {
            need[getIndex(s1[i])]++;
            window[getIndex(s2[i])]++;
        }

        const isSame = () => {
            for (let i = 0; i < 26; i++) {
                if (need[i] !== window[i]) return false;
            }
            return true;
        };

        if (isSame()) return true;

        // slide window
        for (let right = s1.length; right < s2.length; right++) {
            const left = right - s1.length;

            window[getIndex(s2[left])]--;
            window[getIndex(s2[right])]++;

            if (isSame()) return true;
        }

        return false;
    }
}
