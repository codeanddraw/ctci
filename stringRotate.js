
function funcName(s1, s2){
  let newStr = s2 + s2
  console.log(newStr)
  if(newStr.includes(s1)){
      return true
  }
  return false
}

let s1 = "waterbottle", s2 = "erbottlewat"
console.log(`${funcName(s1, s2)}`)