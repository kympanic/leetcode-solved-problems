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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const values = [];
    
    if (!root || root.val === null) {
        return values;
    }
    values.push([root.val]);
    const nextNodes = [];
    let nextLevelNodes = [];
    let levelValues = [];
    let level = 1;
    nextNodes.push(...getChildNodes(root));
    level = 2;
    while (nextNodes.length > 0) {
        const nextNode = nextNodes.shift();
        if (nextNode.val !== null) {
            levelValues.push(nextNode.val);
        }
        nextLevelNodes.push(...getChildNodes(nextNode));
        if (nextNodes.length === 0) {
            nextNodes.push(...nextLevelNodes);
            nextLevelNodes = [];
            if (level % 2 === 0) {
                values.push(levelValues.reverse());
            } else {
                values.push(levelValues);
            }
            levelValues = [];
            level++;
        }
    }
    return values;
};

const getChildNodes = (node) => {
    const nodes = [];
    if (node.left !== null) {
        nodes.push(node.left);
    }
    if (node.right !== null) {
        nodes.push(node.right);
    }
    return nodes;
}