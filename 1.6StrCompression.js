
function funcName(str){
    let sArr = str.split('').sort(), compressedStr = ""
    let map = new Map()

    for(let item of sArr){
        if(!map.has(item)) map.set(item, 0)
        map.set(item, map.get(item) + 1)
    }
    for(let [key,value] of map.entries()){
        compressedStr += key + value
    }
    if(compressedStr.length > str.length) return str
    return compressedStr
}

let str = "agsjssssssssk"
console.log(`The smaller string after compression is: ${funcName(str)}`)