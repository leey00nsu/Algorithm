/*
대기실은 5개이며, 각 대기실은 5x5 크기이다.
각 자리가 x1,y1 , x2,y2 일때 |x1-x2| + |y1-y2| 가 2 이하에 위치할 수 없다.
단, 사이가 파티션으로 막혀있을 때는 가능하다.

위치하는 조건
1. PXP
2. P
   X
   P
3. PX  
   XP
   
   
0,0 1,1 -> 0,1 1,0
1,1 2,0 -> 1,0 2,1
1,1 2,2 -> 1,2 2,1
*/



function solution(places) {
    const pPositions = []
    var answer = [];
    
    for(let i=0;i<5;i++) {
        let isValid = true
        const pPosition = []
        
        for(let j=0;j<5;j++) {
            for(let k=0;k<5;k++) {
                if(places[i][j][k] === 'P'){
                    pPosition.push([j,k])
                }    
            }
        }
        
        for(let j=0;j<pPosition.length;j++){
            const [r1,c1] = pPosition[j]
            for(let k=j+1;k<pPosition.length;k++){
                const [r2,c2] = pPosition[k]
                const d = Math.abs(r1-r2) + Math.abs(c1-c2)
                if(d<=2) {
                    if(r1 === r2 && places[i][r1][Math.min(c1,c2)+1] !== 'X') {
                        isValid = false
                    }
                    if(c1 === c2 && places[i][Math.min(r1,r2)+1][c1] !== 'X') {
                        isValid = false
                    }
                    if(Math.abs(r1-r2) === 1 && Math.abs(c1-c2) === 1 ) {
                        if(places[i][r1][c2] !== 'X' || places[i][r2][c1] !== 'X' ) {
                            isValid = false
                        }
                    }
                }
            }
        }
            
        answer.push(isValid ? 1 : 0)
    }
    
    
    return answer;
}