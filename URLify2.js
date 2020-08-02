
function funcName(str, len){
  let strArr = str.trim().split('')

  for(let i in strArr){
    if(strArr[i] === " ")
        strArr[i] = '%20'
  }
  return strArr.join('')
}

let str = "Mr John Smith  ", len = 13
console.log(`${funcName(str,len)}`)