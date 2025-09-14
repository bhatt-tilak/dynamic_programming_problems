/**
 * fibonacciMemo
 * Calculates the nth Fibonacci number using recursion and memoization.
 * @param {number} n - The position in the Fibonacci sequence
 * @param {Object} memo - Optional memoization object
 * @returns {number} The nth Fibonacci number
 */
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
