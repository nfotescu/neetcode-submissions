class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let low = 1;
        let high = piles.reduce((a, b) => Math.max(a, b), -Infinity);
        let result = high;

        while (low <= high) {
            let k = Math.floor((low + high) / 2);
            let hoursNeeded = 0;
            for (let i = 0; i < piles.length; i++) {
                hoursNeeded += Math.ceil(piles[i] / k);
            }

            if (hoursNeeded <= h) {
                result = k;
                high = k - 1;
            } else {
                low = k + 1;
            }
        }

        return result;
    }
}