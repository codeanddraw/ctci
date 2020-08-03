
function funcName(str){
  let map = new Map(), containsOdd = false
  str = str.toLowerCase()
   
  let sArr = str.split('')
  sArr.forEach((item)=>{
      
      if(item !== " "){
        if(!map.has(item)){
            map.set(item, 1)
        }else{
            map.set(item, map.get(item)+1)
        }
    }
  })

 for(let [key,value] of map.entries()) { 
     console.log(key)
       if(map.get(key) % 2 !== 0){
            if(containsOdd === true) return false
            containsOdd = true
       } 
  }
  return true
}

let str = "Tact coa"
console.log(`${funcName(str)}`)

/*
T 2
a 2
c 2
o 1
*/