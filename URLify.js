
function funcName(str, len){
    let whitespace = 0, replaceChar = 3
    str = str.split('')

    for(let c of str){ 
        if(c === " ") 
        whitespace++
    }

    str.length += (whitespace * replaceChar) - whitespace
    for(let i = str.length - 1; i >= 0; i--){
        if(str[len-1] !== " ") {
            str[i] = str[len - 1]
        }
        else{ 
            str[i] = '0'
            str[i-1] = '2'
            str[i-2] = '%'
            i -= 2
        } 
        len--;
    }
    return str.join('')
}

let str = "Mr John Smith", len = 13
console.log(`${funcName(str,len)}`)