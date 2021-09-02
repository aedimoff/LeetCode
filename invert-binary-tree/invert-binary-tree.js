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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;
    let que = [root];
    
    while(que.length) {
        node = que.shift();
        
        if(node !== null) {            
            [node.left, node.right] = [node.right, node.left]
            que.push(node.left, node.right)
        }
        
    }
    return root;
    
};

