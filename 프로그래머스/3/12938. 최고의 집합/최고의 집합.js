/*
다음 조건을 만족하는 자연수의 집합을 최고의 집합이라고 한다.
1. 각 원소의 합이 S가 되는 수의 집합
2. 1을 만족하면서 각 원소의 곱이 최대가 되는 집합 

n = 7 , s = 100
1 2 3 4 5 6 7 8 9 ... 100

{14,14,14,14,14,14,14}
{2,2,2,2,2} 36
{3,3,2,2} 36
{4,3,3} 36

1
*/

function solution(n, s) {
    if(n>s) return [-1]
    
    const candidates = []
    let sum = 0
    let index = 0
    
    if(s%n === 0) {
        return Array(n).fill(s/n)
    }
    
    for(let i=0;i<n;i++) {
        sum += Math.floor(s/n)
        candidates.push(Math.floor(s/n))
    }
    
    while(sum < s) {
        candidates[index] += 1
        sum += 1
        index+=1
        if(index >= candidates.length) index = 0
    }
    
    return candidates.sort((a,b) => a-b);
}