/*
시작 위치에서 목표 위치까지 최소 몇 번만에 도달할 수 있는지 말하는 게임입니다.
상, 하, 좌, 우 4방향 중 하나를 선택해서 게임판 위의 장애물이나 맨 끝에 부딪힐 때까지 미끄러져 이동하는 것을 한 번의 이동으로 칩니다.
"."은 빈 공간을, "R"은 로봇의 처음 위치를, "D"는 장애물의 위치를, "G"는 목표지점을 나타냅니다.
*/

function solution(board) {
    let di = [0,1,-1,0]
    let dj = [1,0,0,-1]
    let iLength = board.length
    let jLength = board[0].length
    const visited = Array(iLength).fill(false).map(() => Array(jLength).fill(false))
    let startPosition
    
    for(let i=0;i<iLength;i++) {
        for(let j=0;j<jLength;j++) {
            if(board[i][j] === 'R')
                startPosition = [i,j,0]
        }
    }
    
    let queue = []
    queue.push(startPosition)
    
    function slide(i,j,di,dj,d) {
        while(true) {
            let newI = i+di
            let newJ = j+dj
            if(newI >= 0 && newI < iLength && newJ >= 0 && newJ < jLength && board[newI][newJ] !== 'D') {
                i = newI
                j = newJ
            } else {
                queue.push([i,j,d])
                
                break
            }
        }
    }
    
    while(queue.length > 0) {
        const [i,j,d] = queue.shift()
        
        if(board[i][j] === 'G') return d
        
        if(visited[i][j]) continue
        
        
        visited[i][j] = true
        
        
        for(let k=0;k<4;k++) {
            let newI = i+di[k]
            let newJ = j+dj[k]
            
            if(newI >= 0 && newI < iLength && newJ >= 0 && newJ < jLength && board[newI][newJ] !== 'D' ) {
                slide(newI,newJ,di[k],dj[k],d+1)
            }
        }
        
    }
    
    
    return -1
}