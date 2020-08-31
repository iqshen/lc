/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    const needJian = {
        'I': {
            'V': 1,
            'X': 1
        },
        'X': {
            'L': 1,
            'C': 1
        },
        'C': {
            'D': 1,
            'M': 1
        }
    };
    let lastChar = '';
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (needJian[s[i]] && needJian[s[i]][lastChar]) {
            res -= map[s[i]];
        }
        else {
            res += map[s[i]];
        }
        lastChar = s[i];
    }
    return res;
};
// @lc code=end

