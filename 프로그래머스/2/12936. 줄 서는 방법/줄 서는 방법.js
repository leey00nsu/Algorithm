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

현재 n=4,k=6
6번째 방법에서 첫 번째 자리 수는 (6-1) / (4-1)! = 0
숫자의 0번째 인덱스인 1을 결과 배열에 추가 => 현재 배열 [1], 남은 숫자 [2,3,4]
k를 k % (4-1)! = 0 로 변경
n -= 1
현재 n=3,k=0
그 다음 자리 수는 (0-1) / (3-1)! = 0
숫자의 0번째 인덱스인 1을 결과 배열에 추가 => 현재 배열 [2,1] , 남은 숫자 [3,4]
k를 k % (3-1)! = 2 로 변경
n -= 1
현재 n=2,k=2
그 다음 자리 수는 (2-1) / (2-1)! = 0
숫자의 0번째 인덱스인 3을 결과 배열에 추가 => 현재 배열 [2,1,3], 남은 숫자 [4]
k를 k % (2-1)! = 0 로 변경
n -= 1
현재 n=1,k=0
n이 1이므로 남은 숫자 배열에 추가 => 배열 [2,1,3,4]

현재 n=4,k=7
7번째 방법에서 첫 번째 자리 수는 (7-1) / (4-1)! = 1
숫자의 1번째 인덱스인 2를 결과 배열에 추가 => 현재 배열 [2], 남은 숫자 [1,3,4]
k를 k % (4-1)! = 1 로 변경
n -= 1
현재 n=3,k=1
그 다음 자리 수는 (1-1) / (3-1)! = 0
숫자의 0번째 인덱스인 1을 결과 배열에 추가 => 현재 배열 [2,1] , 남은 숫자 [3,4]
k를 k % (3-1)! = 2 로 변경
n -= 1
현재 n=2,k=2
그 다음 자리 수는 (2-1) / (2-1)! = 0
숫자의 0번째 인덱스인 3을 결과 배열에 추가 => 현재 배열 [2,1,3], 남은 숫자 [4]
k를 k % (2-1)! = 0 로 변경
n -= 1
현재 n=1,k=0
n이 1이므로 남은 숫자 배열에 추가 => 배열 [2,1,3,4]

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

    
    while(n > 1) {
        const currentPermutations = factorials[n-1]
        const currentIndex = k === 0 ? n - 1 : Math.floor((k-1) / currentPermutations)
        const currentNumber = numbers[currentIndex]
        
        result.push(currentNumber)
        numbers = numbers.filter(el => el !== currentNumber)
        
        k = k % currentPermutations
        n -= 1
    }
    
    result.push(numbers.pop())
    
    
    return result
}