let userName = '12Soumya123'
let password = '12345'

let userChecker = function(myString) {
    if((myString.includes('123')) && (myString.length > 5)){
        return true
    }
    return false
}

let passChecker = function(myString) {
    if((myString.includes('123')) && (myString.length > 6)){
        return true
    }
    return false
}

console.log(userChecker(userName))
console.log(passChecker(password))