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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return []
    
    let stack = [root]
    let prev = new Map()
    prev.set(root, null);
    
    while(stack.length > 0) {
        let cur = stack.pop();
        
        if (!cur.left && !cur.right) {
            if (construct_path(prev, cur) === sum) return true
        }
        
       
        if (cur.left) {
            prev.set(cur.left, cur);
            stack.push(cur.left)
        }
        
         if (cur.right) {
            prev.set(cur.right, cur);
            stack.push(cur.right)
        }
    }
    return false
};


function construct_path(prev, c) {
    let r = 0
    while(c != null) {
        r += c.val
        c = prev.get(c);
    }
    return r
}