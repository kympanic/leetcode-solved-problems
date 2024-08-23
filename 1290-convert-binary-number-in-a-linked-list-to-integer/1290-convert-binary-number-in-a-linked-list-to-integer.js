/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let temp=[];
    let dec=0;
    let pointer=head;
	
    while(pointer!==null){  
        temp.push(pointer.val);
        pointer=pointer.next;
    }
	
    let exp=temp.length;
	
    for(let i=0;i<temp.length;i++){
        if(temp[i]===1) dec+=2 ** (exp-1);
        exp--;   
    }
    return dec;
    
};