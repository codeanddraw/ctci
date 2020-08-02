// 1) Find the first occurrence of a sub-string 
// in a string and return the index of it if it is present.
function findStartIndex(str, subStr){
    let len = subStr.length
    
    for(let i = 0; i < str.length-len ; i++){
        let subStrObtained = str.slice(i, i+len)
        if(subStrObtained === subStr) return i
    }
}
let str = "HayptackLife"
let subStr = "Stack"
console.log(`${findStartIndex(str,subStr)}`)