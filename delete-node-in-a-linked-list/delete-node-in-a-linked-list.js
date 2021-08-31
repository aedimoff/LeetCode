/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //since we don't have access to the head we can only work with nodes in front of given node
    //set node.val to node.next.val and then skip node.next
    node.val = node.next.val
    node.next = node.next.next
};