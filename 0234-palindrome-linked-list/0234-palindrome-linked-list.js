/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let straight = ''
    let reversed = ''
    let current = head;
    while(current !== null){
        straight += current.val;
        reversed = current.val + reversed;
        current = current.next;
    }
    
  return straight === reversed
};
