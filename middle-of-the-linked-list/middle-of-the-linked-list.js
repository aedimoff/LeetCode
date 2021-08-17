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
var middleNode = function(head) {
    let current = head;
    let length = 0;
    
    while(current) {
        length++
        current = current.next;
    }
    
    let middle = length % 2 === 0 ? Math.floor(length / 2) : Math.floor((length - 1) / 2)
    
    current = head;
    let count = 0;
    while(current) {
        if(count === middle) {
            return current;
        }
        count++
        current = current.next;
    }
};