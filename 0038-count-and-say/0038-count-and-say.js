/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1';
    for (let i = 1; i < n; i++) {
        let temp = "", str = "";
        for (let j = 0; j < res.length; j++) {
            temp += res[j];
            if (res[j] !== res[j+1]) {
                str += `${temp.length}${temp[0]}`;
                temp = "";
            }
        }
        res = str;
    }
    return res;
};