class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const positionToTime = new Array(target).fill(0);

        for (let i = 0; i < position.length; i++) {
            positionToTime[position[i]] = (target - position[i]) / speed[i];
        }

        let fleets = 0;
        let fleetTime = 0;

        for (let pos = target - 1; pos >= 0; pos--) {
            const currentTime = positionToTime[pos];

            if (currentTime === 0) continue;

            if (currentTime > fleetTime) {
                fleets++;
                fleetTime = currentTime;
            }
        }

        return fleets;
    }
}
