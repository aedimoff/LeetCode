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
var reverseList = function(head) {
    let current = head;
    let prevNode = null;
    let nextNode = null;
    
    while(current) {
        nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    
    return prevNode;
    
};
