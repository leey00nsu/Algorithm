/*
숫자가 적힌 카드를 절반으로 나누어 가진 후 , 다음 두 조건 중 하나를 만족하는 카장 큰 양의 정수 a를 구한다.
- 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
- 영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a

철수가 가진 카드 숫자의 최대공약수
영희가 가진 카드 숫자의 최대공약수 
*/


function getGCD(a,b) {
    let l = Math.max(a,b)
    let r = Math.min(a,b)
    
    while(true) {
        let tmp = l%r
        
        if(tmp === 0) {
            return r
        }
        
        l = r
        r = tmp
    }
}

function getMaxGCD(arr) {
    let copiedArr = [...arr]
    let maxGCD = 0
    
    if(copiedArr.length === 1) return copiedArr[0]
    
    while(copiedArr.length>1) {
        const arr1 = copiedArr.pop()
        const arr2 = copiedArr.pop()
        
        maxGCD = getGCD(arr1,arr2)
        
        copiedArr.push(maxGCD)
    }
    
    return maxGCD > 1 ? maxGCD : 0
}


function solution(arrayA, arrayB) {
    let result = 0
    
    const maxGCDA = getMaxGCD(arrayA)
    const maxGCDB = getMaxGCD(arrayB)
    
    if(arrayB.every(el => el%maxGCDA !== 0)) {
        result = Math.max(result,maxGCDA)
    }
    if(arrayA.every(el => el%maxGCDB !== 0)) {
        result = Math.max(result,maxGCDB)
    }
    
    
    return result
}