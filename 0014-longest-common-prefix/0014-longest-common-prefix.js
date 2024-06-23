/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs=> {
    let result=''
    for(let i=0;i<strs[0].length;i++){
        let set=new Set()
        let item=''
        for(let j=0;j<strs.length;j++){
            item=strs[j][i]
            set.add(item)
        }
       
        if(set.size===1) result+=item
        else return result
    }
    return result
}