/*
n명의 사람이 일렬로 줄을 선다.
n명의 사람들에게는 각각 1~n 번호가 매겨져있다.

n명의 사람이 존재하면, 줄을 서는 방법은 n! 만큼 존재한다.
k번째 방법을 구해라.

n = 4, k = 7
a b c d
a b d c
a c b d
a c d b
a d b c
a d c b (1,4,3,2)
b a c d (2 1 3 4)
*/

function solution(n, k) {
    let numbers = []
    const result = []
    const factorials = [0,1]
    
    for(let i=2;i<=n;i++) {
        factorials.push(factorials[i-1]*i)
    }
    
    for(let i=1;i<=n;i++) {
        numbers.push(i)
    }
    
    k -= 1

    
    while(n > 1) {
        const currentPermutations = factorials[n-1]
        const currentIndex = Math.floor(k / currentPermutations)
        const currentNumber = numbers[currentIndex]
        
        result.push(currentNumber)
        numbers = numbers.filter(el => el !== currentNumber)
        
        k = k % currentPermutations
        n -= 1
    }
    
    result.push(numbers.pop())
    
    
    return result
}