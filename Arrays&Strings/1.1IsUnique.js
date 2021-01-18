function isUnique(str) {
    let charArr = []
    charArr.length = 128
    charArr.fill(false)

    for(let i = 0; i < str.length; i++) {
        if(charArr[str[i].toLowerCase()] === true) {
            return false
        }
        charArr[str[i].toLowerCase()] = true
    }
    return true
}

//Test Cases
console.log(isUnique('Test') )
console.log(isUnique('Ok') )
