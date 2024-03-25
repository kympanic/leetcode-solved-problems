/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}


var mergeTwoLists = function(list1, list2) {
    let dummyHead = new Node(null)
    let tail = dummyHead;
    let current1 = list1;
    let current2 = list2;
    
    while(current1 !== null && current2 !== null){
        if(current1.val < current2.val){
            tail.next = current1;
            current1 = current1.next;
        }else{
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
    }
    
    if(current1 === null) tail.next = current2
    if(current2 === null) tail.next = current1;
    
    return dummyHead.next;
};