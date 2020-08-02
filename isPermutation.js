const isPermutation = (str1, str2) =>{
   let len1 = str1.length;
   let len2 = str2.length;
   if(len1 != len2){
       return false;
   }
   let obj = {}
   const arr1 = str1.split("")
   const arr2 = str2.split("")
   for(let v of arr1){
       if(!obj[v]) obj[v]=1
       else obj[v] += 1
   }
   for(let v of arr2){
    if(!obj[v]) return false
    else{
        obj[v] -= 1
        if(obj[v] < 0) return false;
    }
   }
   return true;
}

console.log("Is nisha permutation of ishna? ",isPermutation("nisha","isnha"))
console.log("Is manisha permutation of mwnisha?",isPermutation("manisha","mwnisha"))
console.log("Is manisha permutation of maanisha?",isPermutation("manisha","maanisha"))
console.log("Is manisha permutation of mwn?",isPermutation("manisha","mwn"))
console.log("Is m permutation of mwn?",isPermutation("m","mwn"))