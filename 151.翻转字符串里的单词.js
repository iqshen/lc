/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitArr = s.split(/\s+/);
    let result = [];
    for (let i = splitArr.length; i >= 0; i--) {
        result.push(splitArr[i]);
    }
    return result.join(' ').trim();
};
// @lc code=end

