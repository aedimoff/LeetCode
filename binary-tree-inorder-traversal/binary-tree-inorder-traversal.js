/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    
    let values = [];
    let stack = [];
    let curr = root;
    
    while(curr !== null || stack.length) {
        if(curr) {
            stack.push(curr)
            //if there is a pointer to a node, put it into                  the node on the stack
            curr = curr.left
            //change pointer to node furthest on left side
            //will either reach futher down the tree or set               //curr to null which will lead to else logic on 
            //next iteration
        } else {
            curr = stack.pop();
            //take the next value from the stack
            values.push(curr.val)
            //now you can look at it's value
            curr = curr.right
            //look at the item on the right
            //if it doesn't have a right, it will cause the                 next value to pop off stack
        }

    }
    
    
    
    return values;
};

/// 1, 2, 4, 5, 3, 6