const isUnique = (str) =>{
    const obj = {}
    const arr = str

    for(let c in arr){
        const value = arr[c]
        if(obj[value] > 0){
            return false;
        }
        obj[value] = 1;
    }
    return true
}

console.log("Is string=\"nisha\"unique? ",isUnique("nish"))
console.log("Is string=\"manisha\"unique?",isUnique ("manisha"))