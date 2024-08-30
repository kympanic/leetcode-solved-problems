/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let looper = null;
var sortedListToBST = function(head) {
    let tmp = head, len = 0;
    looper = head;
    while (tmp) {
        len++
        tmp = tmp.next
    }
    return helper(0, len - 1)
};

const helper = function(start, end) {
    if (start > end)
        return null
    let mid = Math.floor((start + end) / 2);
    let left = helper(start, mid - 1)
    let root = new TreeNode(looper.val);
    looper = looper.next;
    root.left = left;
    let right = helper(mid + 1, end)
    root.right = right
    return root
}