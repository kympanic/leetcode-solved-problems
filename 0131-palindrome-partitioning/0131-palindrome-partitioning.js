/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let resultArr = new Array();
    
    function helper(s, partitionedArr, index){
        if(index == s.length){
           resultArr.push([...partitionedArr]);
           return;
        }
        
        for(let i = index; i < s.length; i++){
            if(isPalindrome(s, index , i)){    //passing in index as 'left' and i as 'right', as i tends to move faster because of loop increment
                //choose
                partitionedArr.push(s.slice(index, i+1));

                //explore
                helper(s, partitionedArr, i+1);   //keeping index = i + 1, as it will help in moving one step forward in the 's'

                //unchoose
                partitionedArr.pop();          
            }
        }
    }
    
    helper(s, new Array(), 0);
    return resultArr;
};

function isPalindrome(s, left, right){

    while(left < right){
        if(s[left] != s[right])
            return false;
        left++;
        right--;
    }
    return true;
}