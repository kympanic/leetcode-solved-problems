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
var frequenciesOfElements = function(head) {
   const map = {};
  let curr = head;
  while (curr) {
    map[curr.val] = (map[curr.val] || 0) + 1;
    curr = curr.next;
  }

  let newHead = null;
  let prevNode = null;
  for (const freq of Object.values(map)) {
    const newNode = new ListNode(freq);
    if (!newHead) newHead = newNode;
    if (prevNode) prevNode.next = newNode;
    prevNode = newNode;
  }

  return newHead;
};
