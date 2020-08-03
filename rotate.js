//2) Rotate a 2-d array of numbers in left direction
function rotateArray(arr){
  for(let row = 0; row < arr.length; row++){
      for(let col = 0; col < row; col++){
            let temp = arr[row][col]
            arr[row][col] = arr[col][row]
            arr[col][row] =  temp

      }
  }
  console.log(arr)
  for(let row = 0; row < arr.length; row++){
    for(let col = 0; col < parseInt(arr.length/2); col++){
       let temp = arr[row][col]
       arr[row][col] = arr[row][arr.length - col - 1] // 00 <-> 02
       arr[row][arr.length -col - 1] = temp
    }
 }
return arr
}

let arr = [  [1,2,3],
             [4,5,6],
             [8,9,1] ]
console.log(`Final result:  ${rotateArray(arr)}`)

/*

a. swap along diagonal
1 4 8
2 5 9
3 6 1

b. swap columns
8 4 1 
9 5 2
1 6 3
*/