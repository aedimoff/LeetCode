/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let res = new Set();
    
    emails.forEach(email => {
        res.add(getWorkingEmail(email))
    });
    
    return res.size;
};

var getWorkingEmail = function(email) {
    email = email.split("@")
    let local = email[0];
    let domain = email[1]
    let validLocal = "";
    
    for(let i = 0; i < local.length; i++) {
        if(local[i] === "+") break;
        
        if(local[i] !== ".") validLocal += local[i]
    }
    return validLocal + "@" + domain
};