/*
2
10 11

7
0111 1011 
*/


function getDiffBit(n) {
    if(n%2 === 0) return n+1
    
    const arr = n.toString(2).split('').reverse()
    
    if(!arr.includes('0')) arr.push('0')
    
    let zeroIndex = arr.findIndex(el => el === '0')
    
    arr[zeroIndex - 1] = '0'
    arr[zeroIndex] = '1'
    
    const result = parseInt(arr.reverse().join(''),2)
    
    return result
}

function solution(numbers) {
    return numbers.map(n => getDiffBit(n))
}