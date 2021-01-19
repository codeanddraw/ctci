function URLify(str, trueLen) {
    str = str.split('')
    let i = str.length, index = trueLen, whitespace = 0

    for(let c of str) {
        if(c === ' ')
            whitespace++
    }

    i += (whitespace * 3) - whitespace

    while(i > 0) {
        if(str[index] === ' ') {
            str[i] = '0'
            str[i - 1] = '2'
            str[i - 2] = '%'
            index--
            i = i - 3
        } else {
            str[i] = str[index]
            i--
            index--
        }
    }
    return str.join('')
}

console.log(URLify('Mr John Smith', 13))