/*
bfs로 모든 경로를 구한 뒤, 최소 비용을 계산한다
*/

function solution(board) {
    const queue = []
    const visited = {}
    const maxLength = board.length - 1
    const di = [-1,0,1,0]
    const dj = [0,-1,0,1]
    
    queue.push({i:0,j:0,direction:'i',price:0})
    queue.push({i:0,j:0,direction:'j',price:0})
    
    while(queue.length > 0) {
        const {i,j,direction,price} = queue.pop()
        
        if(visited[`${i},${j},${direction}`] < price) {
            continue
        }
        
        visited[`${i},${j},${direction}`] = price
        
        if(i === maxLength && j === maxLength) continue
        
        for(let k=0;k<4;k++) {
            let nI = i + di[k]
            let nJ = j + dj[k]
            let nD = nI === i ? 'j' : 'i'
            let nP = direction === nD ? price+100 : price+600
            if(nI>=0 && nJ>=0 && nI<=maxLength && nI<=maxLength && nJ<=maxLength && board[nI][nJ] === 0 &&
              (!visited[`${nI},${nJ},${nD}`] || visited[`${nI},${nJ},${nD}`] > nP)) {
                queue.push({i:nI,j:nJ,direction:nD,price:nP})
            }
        }
    }
    
    let iMin =  visited[`${maxLength},${maxLength},i`] ?? Infinity
    let jMin =  visited[`${maxLength},${maxLength},j`] ?? Infinity
    
    
    return Math.min(iMin,jMin);
}