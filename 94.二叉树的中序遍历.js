/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    let reuslt = [];
    let stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        reuslt.push(root.val);
        root = root.right;
    }
    return reuslt;
    // let result = [];
    
    // let inorder = function (root) {
    //     if (root) {
    //         if (root.left) {
    //             inorder(root.left);
    //         }
    //         result.push(root.val);
    //         if (root.right) {
    //             inorder(root.right);
    //         }
    //     }
    // };
    // inorder(root);
    // return result;
};
// @lc code=end

