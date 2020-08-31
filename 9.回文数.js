/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x += '';
    let y = '';
    for (let i = x.length - 1; i >= 0; i--) {
        y += x[i];
    }
    return x === y;
};
// @lc code=end

