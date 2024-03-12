/*
어피치가 화살 n발을 다 쏜 후 라이언이 n발을 쏜다.
과녁은 0~10 점이 존재한다.
만약 k점을 맞췄다면, k점을 더 많이 맞춘 사람이 k점을 가져간다.

최종 점수가 더 높은 사람이 우승자이다.
만약 최종 점수가 같다면 어피치가 우승자가 된다.

라이언이 어피치를 가장 큰 점수차로 이기기 위해 n발의 화살을 어느 과녁에 맞추어야 하는지 구한다.

*/

// 중복 순열
function getPermutation(arr,n) {
    const result = []
    
    if(n === 1) {
        return arr.map(el => [el])
    }
    
    arr.forEach(el => {
        const permutations = getPermutation(arr,n-1)
        const attached = permutations.map(p => [el,...p])
        result.push(...attached)
    })
    
    return result
}

function solution(n, info) {
    const winCase = []
    var answer = [];
    
    const candidates = getPermutation(['w','l'],10)
    
    const candidatesWithPoint = candidates.map(candidate => {
        let pointDiff = 0
        let restPoint = n
        
        const newCandidate = candidate.map((c,idx) => {
            if(c === 'w' && restPoint>= info[idx]+1) {
                restPoint -= info[idx] + 1
                pointDiff += 10 - idx
                
                return info[idx] + 1
            } 
            else {
                if(info[idx] > 0) {
                    pointDiff -= 10 - idx
                }
                return 0
            }
            
        })
        
        return [pointDiff, [...newCandidate,restPoint]]
    })
    
    const filteredCandidates = candidatesWithPoint.filter(candidate => candidate[0] > 0)
    
    filteredCandidates.sort((a,b) => a[0] - b[0] || a[1][10] - b[1][10] || a[1][9] - b[1][9] || 
                            a[1][8] - b[1][8] || a[1][7] - b[1][7] || a[1][6] - b[1][6] || 
                            a[1][5] - b[1][5]|| a[1][4] - b[1][4] || a[1][3] - b[1][3] || 
                            a[1][2] - b[1][2] || a[1][1] - b[1][1])
    
    if(filteredCandidates.length === 0) return [-1]
    
    
    return filteredCandidates.at(-1)[1];
}