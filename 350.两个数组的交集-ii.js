/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let res = [];
    for (let num1 of nums1) {
        if (map[num1]) {
            map[num1]++;
        }
        else {
            map[num1] = 1;
        }
    }

    for (let num2 of nums2) {
        if (map[num2] > 0) {
            res.push(num2);
            map[num2]--;
        }
    }
    return res;
};
// @lc code=end

