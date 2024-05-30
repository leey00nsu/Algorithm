/*
다음과 같이 규칙을 어기는 실수를 했을 수도 있습니다.
    "O"를 표시할 차례인데 "X"를 표시하거나 반대로 "X"를 표시할 차례인데 "O"를 표시한다.
    선공이나 후공이 승리해서 게임이 종료되었음에도 그 게임을 진행한다.

이 게임판이 규칙을 지켜서 틱택토를 진행했을 때 나올 수 있는 게임 상황이면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

XOO
XO.
X..

OX.
OX.
O..

XO.
OXO
XOX

OXO
XOX
OXO
*/

function isStreak(arr,streaks) {
    return streaks.some(s => 
        s.every(sEl => {
            let isMatch = false
            arr.forEach(el => {
                if(el[0] === sEl[0] && el[1] === sEl[1]) isMatch = true
            })
            
            return isMatch
        })
    )
}

function solution(board) {
    const oList = []
    const xList = []
    const ROW_STREAKS = [[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]]]
    const COL_STREAKS = [[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]]]
    const CROSS_STREAKS = [[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]]
    const STREAKS = [...ROW_STREAKS,...COL_STREAKS,...CROSS_STREAKS]
    
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(board[i][j] === 'O') {
                oList.push([i,j])
            }
            
            if(board[i][j] === 'X') {
                xList.push([i,j])
            }
            
        }
    }
    
    let isOStreak = false
    let isXStreak = false
    let diff = Math.abs(xList.length - oList.length)
    
    if(oList.length >= 3 && isStreak(oList,STREAKS)) {
        isOStreak = true
    }
    
    if(xList.length >= 3 && isStreak(xList,STREAKS)) {
        isXStreak = true
    }
    
    console.log(isOStreak,isXStreak,diff)
    
    if(isOStreak && isXStreak) return 0
    if(isOStreak && diff !== 1) return 0
    if(isXStreak && diff !== 0) return 0
    if(xList.length > oList.length) return 0
    if(diff > 1) return 0
    
    
    return 1;
}