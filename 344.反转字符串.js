/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const length = s.length;
    if (length < 2) {
        return;
    }
    let endIndex = length / 2 - 1;

    for (let i = 0; i <= endIndex; i++) {
        let temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
    return s;
};
// @lc code=end

