/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    let stack = [];
    if (root) {
        stack.push(root);
    }
    while (stack.length > 0) {
        let cur = stack.pop();
        result.push(cur.val);
        if (cur.right) {
            stack.push(cur.right);
        }
        if (cur.left) {
            stack.push(cur.left);
        }
    }
    return result;

    // let result = [];
    // let preTraversal = function (root) {
    //     if (root) {
    //         result.push(root.val);
    //         preTraversal(root.left);
    //         preTraversal(root.right);
    //     }
    // };
    // preTraversal(root);
    // return result;
};
// @lc code=end

