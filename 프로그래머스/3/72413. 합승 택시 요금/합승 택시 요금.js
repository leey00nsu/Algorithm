/*
"무지"는 "어피치"와 귀가 방향이 비슷하여 택시 합승을 이용하면 택시요금을 얼마나 아낄 수 있을 지 계산해 보고 "어피치"에게 합승을 제안해 보려고 합니다.

한 점으로부터 모든 점까지의 최소 거리를 구한다. -> 다익스트라
모든 점으로부터 모든 점까지의 최소 거리를 구한다 -> 플로이드 워셜
*/

function solution(n, s, a, b, fares) {
    const fareArr = []
    
    for(let i=0;i<n+1;i++) {
        const subArr = Array(n+1).fill(Infinity)
        
        fareArr.push(subArr)
    }
    
    for(let i=1;i<n+1;i++) {
        fareArr[i][i] = 0
    }
    
    fares.forEach(f => {
        const [from,to,fare] = f
        
        fareArr[from][to] = fare
        fareArr[to][from] = fare
    })
    
    for(let k=1;k<n+1;k++) {
        for(let i=1;i<n+1;i++) {
            for(let j=1;j<n+1;j++) {
                fareArr[i][j] = Math.min(fareArr[i][j],fareArr[i][k] + fareArr[k][j])
            }
        }
    }
    
    let cost = Infinity
    
    for(let i=1;i<n+1;i++) {
        cost = Math.min(cost,fareArr[s][i] + fareArr[i][a] + fareArr[i][b])
    }
    
    return cost;
}