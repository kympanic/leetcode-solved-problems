/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate=n=>{
   let rt=[[1]]
   for(let i=1;i<n;i++){
      rt[i]=[1]
      for(let j=1;j<rt[i-1].length;j++){
         rt[i][j]=rt[i-1][j]+rt[i-1][j-1]
      }
      rt[i].push(1)
   }
   return rt
}