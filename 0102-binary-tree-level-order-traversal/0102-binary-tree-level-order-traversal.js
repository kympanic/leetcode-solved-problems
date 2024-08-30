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
var levelOrder = function(root) {
    
    let result = [];
    
    let height = finding_Height(root)    

    for(let level=0; level<height; level++){               
        result.push(printLevel (root, level))
    }
    
    return result;

};


function finding_Height(node){
    
    if(!node) return 0;
    return Math.max( finding_Height(node.left), finding_Height(node.right) ) + 1;

}

function printLevel(root, level){

    let ans = [] ;

    function printingLevel(node, level){                    // from root, go untill (level-1) eventually becomes zero
                                                            // and when level becomes zero, then PRINT the NODE.val
        if(node ==  null) return;
        if(level == 0 ) ans.push(node.val)
        else{
            printingLevel(node.left,  level-1)             // this helps in digging deep
            printingLevel(node.right, level-1)
        }
    }
    
    printingLevel(root, level)
    return ans;

}