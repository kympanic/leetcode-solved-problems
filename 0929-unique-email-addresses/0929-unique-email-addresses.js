/**
 * @param {string[]} emails
 * @return {number}
 */
// var numUniqueEmails = function(emails) {
//   //use hash set to store all the unique emails
    
//   let uniqueEmails = new Set();
    
//   emails.forEach((email) => {
//         let cleanMail = [];

//         // iterate over each character in email
//         for (let i = 0; i < email.length; ++i) {
//             let currChar = email.charAt(i);

//             // stop adding characters to localName
//             if (currChar === "+" || currChar === "@") break;

//             // add this character if not '.'
//             if (currChar !== ".") cleanMail.push(currChar);
//         }

//         // compute domain name (substring from end to '@')
//         let domainName = [];

//         for (i = email.length - 1; i >= 0; --i) {
//             let currChar = email.charAt(i);
//             domainName.push(currChar);
//             if (currChar == "@") break;
//         }

//         domainName = domainName.reverse().join("");
//         cleanMail = cleanMail.join("");

//         uniqueEmails.add(cleanMail + domainName);
//     });

//     return uniqueEmails.size
// };

let numUniqueEmails = function (emails){
    let uniqueEmails = new Set();
    
    emails.forEach((email)=> {
        let parts = email.split("@")
        let local = parts[0].split("+");
        uniqueEmails.add(local[0].replaceAll(".","")+"@" + parts[1])
    })
    return uniqueEmails.size
    
}