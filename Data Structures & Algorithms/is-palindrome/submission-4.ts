class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;
        const lowerS = s.toLowerCase()
        while (start < end) {
          
            if (!/[a-z0-9]/i.test(lowerS[start])) {
                start++;
                continue
            }
            if (!/[a-z0-9]/i.test(lowerS[end])) {
                end--;
                continue
            }

            if (lowerS[start] !== lowerS[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
