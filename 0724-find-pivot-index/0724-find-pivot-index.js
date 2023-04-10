/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums)=> {
    //calculate full sum
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    //Excluding the number on the current index, if the total sum - the left sum === the left sum,     //you have found the pivot
    
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(sum - nums[i] - leftSum === leftSum){
            return i;
        }
        leftSum += nums[i]
    }
    return -1
}

   
