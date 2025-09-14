/**
 * gridTravelerMemo
 * Calculates the number of ways to travel on a grid from the top-left to the bottom-right corner.
 * You can only move down or right.
 * Uses memoization for efficiency.
 * @param {number} rows - Number of rows
 * @param {number} cols - Number of columns
 * @param {Object} memo - Optional memoization object
 * @returns {number} Number of ways to travel the grid
 */
function gridTravelerMemo(rows, cols, memo = {}) {
    const key = `${rows},${cols}`;

    if (key in memo) return memo[key];
    
    if (rows === 0 || cols === 0) return 0;
    if (rows === 1 && cols === 1) return 1;
    
    memo[key] = gridTravelerMemo(rows - 1, cols, memo) + gridTravelerMemo(rows, cols - 1, memo);
    return memo[key];
}
