/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
   const ret = path.split(/\/+/g).reduce((acc, cur) => {
        if(cur == "") return acc;
        if(cur === ".") { 
            return acc; 
        } 
        else if(cur === "..") {
            acc.pop();
            return acc;
        } else acc.push(cur); 
        return acc; 
    }, []).join("/");
    
    if(ret.length  === 0){
        return "/";
    }
    else if(!ret.startsWith("/")){
        return "/"+ret;
    }
    
    return ret.join("/")
};