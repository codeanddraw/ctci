function checkPermutation(str1, str2) {
    if(str1.length != str2.length) return false
    let charArray = []
    charArray.length = 128
    charArray.fill(0)

    for(let j = 0; j < str1.length; j++) {
        let c = str1[j]
        charArray[c] ++
    }

    for(let i = 0; i < str2.length; i++) {
        let c = str2[i]
        charArray[c]--

        if(charArray[c] < 0)
            return false
    }
    return true
}

console.log(checkPermutation('do g','god g'))