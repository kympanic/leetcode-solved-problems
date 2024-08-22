/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {

    const nodeFromStart = totalNoOfNodes(head) - n;
    
    if(nodeFromStart==0) return head.next
    
    let prev = head;
    let next = head.next;
    for(let i=1; i<nodeFromStart; i++) {
        prev=prev.next;
        next=next.next;
    }
    
    prev.next = next.next; //CRUX
    
    return head;
    
};

function totalNoOfNodes(head){
    let count = 0;
    while(head){
        head = head.next;
        count++;
    }
    
    return count;
}
