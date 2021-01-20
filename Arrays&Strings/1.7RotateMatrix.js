function rotateMatrix(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length/2; j++) {
            let temp = arr[i][j]
            arr[i][j] = arr[i][arr.length - j - 1]
            arr[i][arr.length - j - 1] = temp
        }
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
    return arr
}

let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]]
/**
 * 
 * [3, 2, 1]
 * [6, 5, 4]
 * [9, 8, 7]
 * 
 * [3, 6, 9]
 * [2, 5, 8]
 * [1, 4, 7]
 */
console.log(rotateMatrix(arr))