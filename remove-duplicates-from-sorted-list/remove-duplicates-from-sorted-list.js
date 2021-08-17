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
var deleteDuplicates = function(head) {
    let current = head;
    while(current) {
        if(current.next !== null && current.next.val === current.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
    //if current node.next === nextNode set node.next to nextNode.next
};