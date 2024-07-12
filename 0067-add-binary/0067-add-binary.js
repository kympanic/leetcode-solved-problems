/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse();
    b = b.split("").reverse();
    let c = [];
    let extra = 0;
    for(var i = 0; i< ((a.length > b.length) ? a.length : b.length); i++)
    {
        if(a[i] == undefined)a[i] = 0;
        if(b[i] == undefined)b[i] = 0;
        a[i] = parseInt(a[i]);
        b[i] = parseInt(b[i]);
        c[i] = (extra + a[i] + b[i]) % 2;
        extra = Math.floor((extra + a[i] + b[i]) / 2);
        c[i] = c[i].toString()
    }
    if(extra != 0)
    {
        c[i + 1] = extra;
        c[i + 1] = c[i + 1].toString()
    }
    c = c.reverse().join("");
    return c;
};