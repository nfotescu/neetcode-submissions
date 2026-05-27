class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let start = 0;
        let end = rows * cols - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            const row = Math.floor(mid / cols);
            const col = mid % cols;

            const value = matrix[row][col];

            if (value > target) {
                end--;
            } else if (value < target) {
                start++;
            } else {
                return true;
            }
        }

        return false;
    }
}
