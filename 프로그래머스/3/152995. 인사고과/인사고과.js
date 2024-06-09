/*
만약 어떤 사원이 다른 임의의 사원보다 두 점수가 모두 낮은 경우가 한 번이라도 있다면 그 사원은 인센티브를 받지 못합니다
그렇지 않은 사원들에 대해서는 두 점수의 합이 높은 순으로 석차를 내어 석차에 따라 인센티브가 차등 지급됩니다. 
두 점수의 합이 동일한 사원들은 동석차이며, 동석차의 수만큼 다음 석차는 건너 뜁니다.
    점수의 합이 가장 큰 사원이 2명이라면 1등이 2명이고 2등 없이 다음 석차는 3등부터입니다.
    
[[2,2],[2,3],[3,2],[1,3],[4,2],[1,2]]    
[4,5,5,6,4,3]

1 1 1 4 4 -1
5 5 5 4 4 3

[4,4,5,5,3]
*/

function solution(scores) {
    const targetA = scores[0][0]
    const targetB = scores[0][1]
    const targetSum = targetA + targetB
    
    let rank = 1
    
    const sortedScores = scores.sort((a,b) => b[0] - a[0] || a[1] - b[1])
    
    let maxB = 0
    
    
    for(let i=0;i<sortedScores.length;i++) {
        const [a,b] = sortedScores[i]
        
        if(a > targetA && b > targetB) return -1
        
        if(maxB <= b) {
            maxB = Math.max(maxB,b)
            
            if(a+b > targetSum) rank += 1
        }  
    }
    
    
    return rank;
}