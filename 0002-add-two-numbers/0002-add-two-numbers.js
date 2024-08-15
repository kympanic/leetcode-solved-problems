/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const res = new ListNode('dummy');
    let curr = res;
    let carry = 0;
    while(l1 != null || l2 != null) {
        let val = carry;
        if(l1 != null) {
            val +=l1.val;
            l1 = l1.next;
        }
        if(l2 != null) {
            val +=l2.val;
            l2 = l2.next;
        }
        carry = val > 9 ? 1: 0;
        curr.next = new ListNode(val % 10);
        
        curr = curr.next;
    }
    if( carry > 0) curr.next = new ListNode(1);
    return res.next;
};