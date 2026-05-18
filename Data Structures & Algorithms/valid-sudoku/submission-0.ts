class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const columns = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const value = board[i][j];
                if (value === ".") continue;
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                console.log('boxIndex', boxIndex)
                if (rows[i].has(value) || columns[j].has(value) || boxes[boxIndex].has(value)) {
                    return false;
                }
                rows[i].add(value);
                columns[j].add(value);
                boxes[boxIndex].add(value);
            }
        }
        return true;
    }
}
