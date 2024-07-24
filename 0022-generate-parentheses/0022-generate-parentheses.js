/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    
    let res = []

    const backtrack = (string, left, right) => {
        // basecase: total string is 2n
        if (string.length === 2 * n) return res.push(string)

        // add left parenthesis
        if (left < n) backtrack(string + '(', left + 1, right)

        // add right parenthesis
        if (right < left) backtrack(string + ')', left, right + 1)

    }

    backtrack('', 0, 0)

    return res
};