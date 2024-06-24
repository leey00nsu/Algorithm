/*
레스토랑의 구조는 완전히 동그란 모양이고 외벽의 총 둘레는 n미터이며, 
외벽의 몇몇 지점은 추위가 심할 경우 손상될 수도 있는 취약한 지점들이 있습니다.
빠른 공사 진행을 위해 점검 시간을 1시간으로 제한했습니다.
1시간 동안 이동할 수 있는 거리는 제각각이기 때문에, 최소한의 친구들을 투입해 취약 지점을 점검하고 
나머지 친구들은 내부 공사를 돕도록 하려고 합니다.
레스토랑의 정북 방향 지점을 0으로 나타내며 취약 지점의 위치는 정북 방향 지점으로부터 시계 방향으로 떨어진 거리로 나타냅니다
친구들은 출발 지점부터 시계, 혹은 반시계 방향으로 외벽을 따라서만 이동합니다.

1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11

1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,9,10


*/

function getPermutation(arr,n) {
    const result = []
    
    if(n === 1) {
        return arr.map(el => [el])
    }
    
    arr.forEach((cur,idx) => {
        const rest = [...arr.slice(0,idx),...arr.slice(idx+1)]
        const permutations = getPermutation(rest,n-1)
        const attached = permutations.map(el => [cur,...el])
        result.push(...attached)
    })
    
    return result
}

function solution(n, weak, dist) {
    const extendedWeak = Array(weak.length*2).fill(0)
    
    for(let i=0;i<extendedWeak.length;i++) {
        if(i >= weak.length) {
            extendedWeak[i] = n + weak[i - weak.length]
        } else {
            extendedWeak[i] = weak[i]
        }
    }
    
    dist.sort((a,b) => b - a)
    
    for(let i=1;i<=dist.length;i++) {
        const candidates = getPermutation(dist,i)
        
        for(const candidate of candidates) {
            for(let j=0;j<weak.length;j++) {
                let line = extendedWeak.slice(j,weak.length+j)
                
                for(const c of candidate) {
                    const coverage = line[0] + c
                    line = line.filter(el => el > coverage)
                    
                    if(line.length === 0) return i
                }
            }
        }
    }
    
    return -1
}