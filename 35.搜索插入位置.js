/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums[0] >= target) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (target > nums[i] && target <= nums[i + 1]) {
            return i + 1;
        }
    }
    return nums.length;
};
// @lc code=end

