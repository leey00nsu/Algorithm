/*
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요

*/


function solution(board)
{
    let maxI = board.length
    let maxJ = board[0].length
    let maxN = 0
    
    if(maxI === 1) {
        return Math.max(...board[0])
    }
    
    if(maxJ === 1) {
        const arr = []
        
        for(let i=0;i<maxI;i++) {
            arr.push(board[i][0])
        }
        
        return Math.max(...arr)
    }
    
    
    for(let i=1;i<maxI;i++) {
        for(let j=1;j<maxJ;j++) {
            if(board[i][j] === 1) {
                board[i][j] = Math.min(board[i-1][j-1],board[i][j-1],board[i-1][j]) + 1
                maxN = Math.max(maxN,board[i][j])
            }
        }
    }
    
    return maxN*maxN
}