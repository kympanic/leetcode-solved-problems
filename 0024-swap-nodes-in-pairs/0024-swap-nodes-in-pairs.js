/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    let last = null;
    let cur  = head;
    try {
        while (cur.next) {
            let n    = cur.next;
            cur.next = cur.next.next;
            n.next   = cur;
            if (last) {
                last.next = n;
                last = n;
            } else {
                head = n;
            }
            last = cur;
            cur  = cur.next;
        }
    } catch(err) {
    }
    return head;
};