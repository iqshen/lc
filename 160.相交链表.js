/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let A = headA;
    let B = headB;
    while (A || B) {
        if (A === B) {
            return A;
        }
        if (A === null) {
            A = headB;
        }
        else {
            A = A.next;
        }

        if (B === null) {
            B = headA;
        }
        else {
            B = B.next;
        }
    }
    return null;
};
// @lc code=end

