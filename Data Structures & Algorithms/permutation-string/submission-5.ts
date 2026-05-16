class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Length = s1.length;
        const map = {};

        for (let i = 0; i < s1Length; i++) {
            map[s1[i]] = (map[s1[i]] || 0) + 1;
        }

        for (let j = 0; j < s2.length; j++) {
            if (map[s2[j]]) {
                const chunk = s2.slice(j, j + s1Length);
                if (chunk.length < s1Length) {
                    return false;
                }
                const copiedMap = Object.create(map);

                for (let iterator = 0; iterator < chunk.length; iterator++) {
                    copiedMap[chunk[iterator]] = (copiedMap[chunk[iterator]] || 0) - 1;
                }

                if ([...Object.values(copiedMap)].every((v) => v === 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
