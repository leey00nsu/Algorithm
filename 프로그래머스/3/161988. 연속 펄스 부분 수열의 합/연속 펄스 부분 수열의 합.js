/*
펄스 수열은 1과 -1로 시작하며, 번갈아 나오는 형태의 수열이다.

부분 수열에 펄스 수열을 곱해 나오는 가장 큰 합을 구한다.
*/

function solution(sequence) {
    const dp1 = [] // 펄스 수열이 1로 시작
    const dp2 = [] // 펄스 수열이 -1로 시작
    
    dp1.push(sequence[0])
    dp2.push(-sequence[0])
    
    for(let i=1;i<sequence.length;i++) {
        const current = i%2 === 0 ? sequence[i] : -sequence[i]
        dp1[i] = Math.max(dp1[i-1]+current,current)
    }
    
    for(let i=1;i<sequence.length;i++) {
        const current = i%2 === 0 ? -sequence[i] : sequence[i]
        dp2[i] = Math.max(dp2[i-1]+current,current)
    }
    
    let maxSum = 0
    
    for(let i =0;i<dp1.length;i++) {
        maxSum = Math.max(maxSum,dp1[i],dp2[i])
    }
    
    
    
    
    return maxSum
}