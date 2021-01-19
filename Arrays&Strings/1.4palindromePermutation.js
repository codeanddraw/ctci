function palindromePermutation(str) {
    const strArr = str.toLowerCase().split('')
    let obj = {}, oneOdd = false

    for(let i in strArr) {
        let character = strArr[i]
        
        if(character === ' ')
            continue
        else if(character in obj) {
            obj[character] += 1
        } else {
            obj[character] = 1
        }
    }

    for(let character in obj) {
        if(obj[character] % 2 !== 0 && oneOdd === true)
            return false
        else if(obj[character] % 2 !== 0)
            oneOdd = true
        else 
            continue  
    }
    return true
}

console.log(palindromePermutation('Tact cat'))
console.log(palindromePermutation('Tact coa'))
console.log(palindromePermutation('atco cta'))