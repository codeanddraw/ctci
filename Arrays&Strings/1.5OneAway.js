function oneAway(str1, str2) {

    if(Math.abs(str2.length - str1.length) > 1) 
        return false

    // Replace a character
    if(str2.length === str1.length) {
        let j = 0, i = 0, oneEdit = true

        while(j < str1.length) {
            if(str1[j] === str2[i]) {
                j++
                i++
            }
            else if( oneEdit === false)
                return false
            else {
                oneEdit = false
                i++
                j++
            }
        }
        return true

    } else {
        // Insert a character or Remove a character
        let small = str1.length > str2.length?str2:str1
        let large = str1.length > str2.length?str1:str2
        let j = 0, i = 0, oneEdit = true

        while(j < large.length) {
            if(large[j] === small[i]) {
                j++
                i++
            }
            else if( oneEdit === false)
                return false
            else {
                oneEdit = false
                j++
            }
        }
        return true
    }
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))