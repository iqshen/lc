/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    let length = nums.length;
    if (nums === null || length < 3) {
        return ans;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let L = i + 1;
        let R = length - 1;

        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] === nums[L + 1]) {
                    L++;
                }
                while (L < R && nums[R] === nums[R - 1]) {
                    R--;
                }
            }
            if (sum < 0) {
                L++;
            }
            else {
                R--;
            }
        }
    }
    return ans;
};
// @lc code=end

