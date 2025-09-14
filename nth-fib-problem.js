console.log('find nth Fibonacci number');

// 1  2  3  4  5  6  7  8  9  10  11  12
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// memoization: save in a hash table 
// fast access O(1) time complexity
// space complexity O(n)
// {
//     1: 1,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 5,
//     6: 8,
//     7: 13,
//     8: 21,
//     9: 34,
//     10: 55
// }

function fibnth(n, memo = {}) {
    const hashIndexLabel = `fib-${n}`;
    console.log('state of memo: ', memo);
    // if in memo then return 
    if(hashIndexLabel in memo) return memo[hashIndexLabel]

    // if n is 1 or 2 return 1
    if (n === 1 || n === 2) {
        return 1
    }
    memo[hashIndexLabel] = fibnth(n - 1, memo) + fibnth(n - 2, memo)
    return memo[hashIndexLabel]
}

const n = 10
const a = fibnth(n) // 12586269025
console.log(`${n}th Fibonacci number is: `, a)