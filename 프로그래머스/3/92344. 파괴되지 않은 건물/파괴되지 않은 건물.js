/*
이 맵에는 내구도를 가진 건물이 각 칸마다 하나씩 있습니다.
건물은 적의 공격을 받으면 내구도가 감소하고 내구도가 0이하가 되면 파괴됩니다.
아군은 회복 스킬을 사용하여 건물들의 내구도를 높이려고 합니다.

적의 공격과 아군의 회복 스킬은 항상 직사각형 모양입니다.

행*열 = 1,000,000
매번 확인하면 시간복잡도에 걸림
공격받은 좌표에 대해서 일단 모두 계산한 후 일괄적으로 계산

*/


function solution(board, skill) {
    const maxRow = board.length - 1
    const maxCol = board[0].length - 1
    const acc = Array(board.length).fill(0).map(el => Array(board[0].length).fill(0))
    
    let alive = 0
    
    skill.forEach(s => {
        const [type, r1, c1, r2, c2, degree] = s
        
        const diff = type === 1 ? -degree : degree
        
        acc[r1][c1] += diff
        if(c2+1 <= maxCol) acc[r1][c2+1] -= diff
        if(r2+1 <= maxRow) acc[r2+1][c1] -= diff
        if(c2+1 <= maxCol && r2+1 <= maxRow) acc[r2+1][c2+1] += diff
        
    })
    
    // 왼쪽에서 오른쪽을 누적합
    for(let i=0;i<=maxRow;i++) {
        for(let j=1;j<=maxCol;j++) {
            acc[i][j] = acc[i][j] + acc[i][j-1]
        }
    }
    
    // 위에서 아래로 누적합
    for(let i=1;i<=maxRow;i++) {
        for(let j=0;j<=maxCol;j++) {
            acc[i][j] = acc[i][j] + acc[i-1][j]
        }
    }
    
    for(let i=0;i<=maxRow;i++) {
        for(let j=0;j<=maxCol;j++) {
            board[i][j] = board[i][j] + acc[i][j]
            
            if(board[i][j] >= 1) alive += 1
        }
    }

    
    return alive;
}