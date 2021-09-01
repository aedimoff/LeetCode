/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    while(head) {
        if(head.val === val) {
            head = head.next
        } else {
            break;
        }
    }
    let currentNode = head;
    let prev = null;

    while(currentNode) {
        if(currentNode.val === val) {
            prev.next = currentNode.next
            currentNode = currentNode.next;
        } else {
            prev = currentNode;
            currentNode = currentNode.next;
        }
    }
    return head;
};