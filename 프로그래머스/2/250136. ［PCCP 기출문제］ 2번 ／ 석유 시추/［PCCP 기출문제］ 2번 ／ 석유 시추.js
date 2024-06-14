/*
세로길이가 n 가로길이가 m인 격자 모양의 땅 속에서 석유가 발견되었습니다.
수직으로 단 하나만 뚫을 수 있을 때, 가장 많은 석유를 뽑을 수 있는 시추관의 위치를 찾으려고 합니다. 
*/

function solution(land) {
    const rowLength = land.length
    const colLength = land[0].length
    const dR = [0,1,0,-1]
    const dC = [1,0,-1,0]
    const oilMap = {}
    
    let visited = Array(rowLength).fill(null).map(el => Array(colLength).fill(null))
    let maxSum = 0
    let oilId = 1
    
    function dfs(r,c,origin) {
        let cnt = 0
        const stack = [[r,c]]
        
        while (stack.length > 0) {
            const [cr, cc] = stack.pop();
            
            if(cr < 0 || cr >= rowLength || cc < 0 || cc >= colLength) continue
            if(visited[cr][cc] || land[cr][cc] === 0) continue
            
            visited[cr][cc] = origin;
            cnt += 1;
            
            for (let i = 0; i < 4; i++) {
                const nextR = cr + dR[i];
                const nextC = cc + dC[i];
                stack.push([nextR, nextC]);
            }
        }
        
        return cnt
    }
    
    for(let i=0;i<colLength;i++) {
        for(let j=0;j<rowLength;j++) {
            if(!visited[j][i] && land[j][i] === 1) {
                const cnt = dfs(j,i,oilId)
                oilMap[oilId] = cnt 
                
                oilId += 1
            } 
        }
    }

    
    for(let i=0;i<colLength;i++) {
        let sum = 0
        const visitedId = []
        
        for(let j=0;j<rowLength;j++) {
            const currentId = visited[j][i]
            
            if(!currentId) continue
            if(visitedId.includes(currentId)) continue
            
            visitedId.push(currentId)
            
            sum += oilMap[currentId]
        }
        
        maxSum = Math.max(maxSum,sum)
    }
    
    return maxSum;
}