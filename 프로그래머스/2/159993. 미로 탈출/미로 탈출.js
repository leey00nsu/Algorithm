/*
1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다
각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다.
통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다
출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다
이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다
미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때 걸리는 시간을 구하려 합니다.

S -> L 까지의 최단거리 + L -> E 까지의 최단거리
*/

function solution(maps) {
    const maxI = maps.length
    const maxJ = maps[0].length
    let visited = Array(maxI).fill(false).map(el => Array(maxJ).fill(false))
    const di = [0,1,-1,0]
    const dj = [1,0,0,-1]
    
    let sPosition
    let lPosition
    
    for(let i=0;i<maxI;i++) {
        for(let j=0;j<maxJ;j++) {
            if(maps[i][j] === 'S') {
                sPosition = [i,j,0]
            }
        }
    }
    
    let queue = []
    queue.push(sPosition)
    
    while(queue.length > 0) {
        const [i,j,d] = queue.shift()
        
        if(maps[i][j] === 'L') {
            lPosition = [i,j,d]
            break
        }
        
        for(let k=0;k<4;k++) {
            let i2 = i+di[k]
            let j2 = j+dj[k]
            if(i2 >= 0 && i2 < maxI && j2 >=0 && j2 < maxJ && maps[i2][j2] !== 'X' && !visited[i2][j2]) {
                visited[i2][j2] = true
                queue.push([i2,j2,d+1])
            }
        }
    }
    
    if(!lPosition) return -1
    queue = []
    queue.push(lPosition)
    visited = Array(maxI).fill(false).map(el => Array(maxJ).fill(false))

    while(queue.length > 0) {
        const [i,j,d] = queue.shift()
        
        visited[i][j] = true
        
        if(maps[i][j] === 'E') {
            return d
        }
        
        for(let k=0;k<4;k++) {
            let i2 = i+di[k]
            let j2 = j+dj[k]
            if(i2 >= 0 && i2 < maxI && j2 >=0 && j2 < maxJ && maps[i2][j2] !== 'X' && !visited[i2][j2]) {
                visited[i2][j2] = true
                queue.push([i2,j2,d+1])
            }
        }
    }
    
    
    
    return -1;
}