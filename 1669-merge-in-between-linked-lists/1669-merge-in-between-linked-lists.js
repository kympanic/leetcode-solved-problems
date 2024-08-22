/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let idx = 1;
    let left = list1;
    let right = list1;
    while(idx<=b){
        if(idx<a){
            left = left.next;
            right = right.next;
        }else if(idx<=b){
            right = right.next;
        }
        idx++;
    }
    right = right.next;
    left.next = list2;
    while(list2.next!==null){
        list2 = list2.next;
    }
    list2.next = right;
    return list1;
};