/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ifLessThanZero = x < 0 ? '-' : '';
    let res = '';
    x += '';
    x = x.split('');
    for (let i = x.length - 1; i >= 0; i--) {
        res += `${x[i]}`;
    }
    res = parseInt(ifLessThanZero + res, 10);
    if (Math.abs(res) >= Math.pow(2, 31)) {
        return 0;
    }
    return res;
};
// @lc code=end

