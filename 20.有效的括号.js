/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const leftMap = {
        '(': 1,
        '[': 1,
        '{': 1
    };
    // const rightMap = {
    //     ')': 1,
    //     ']': 1,
    //     '}': 1
    // };
    const doubleMap = {
        // '(': ')',
        // '[': ']',
        // '{': '}',
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (leftMap[s[i]]) {
            stack.push(s[i]);
        }
        else if (doubleMap[s[i]] === stack[stack.length - 1]) {
            stack.pop();
        }
        else {
            return false;
        }
    }

    if (stack.length) {
        return false;
    }
    return true;

};
// @lc code=end

