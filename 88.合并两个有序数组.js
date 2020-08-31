/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let tail = m + n - 1;
    while (index2 >= 0) {
        if (nums2[index2] < nums1[index1]) {
            nums1[tail] = nums1[index1];
            tail--;
            index1--;
        }
        else {
            nums1[tail] = nums2[index2];
            index2--;
            tail--;
        }
    }
};
// @lc code=end

