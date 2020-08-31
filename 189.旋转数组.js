/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let real = k % nums.length;
    for (let i = 0; i < real; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};
// @lc code=end

