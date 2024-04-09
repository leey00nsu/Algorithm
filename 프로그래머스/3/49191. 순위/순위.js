/*
각각 1번부터 n번까지 번호를 받았습니다
A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다
몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.
정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.

*/

function solution(n, results) {
    const rankArr = Array(n).fill(0).map(() => Array(n).fill(0))
    
    results.forEach(r => {
        const [w,l] = r
        
        rankArr[w-1][l-1] = 1
        rankArr[l-1][w-1] = -1
    })
    
    for(let i=0;i<n;i++) {
        rankArr[i][i] = 0
    }
    
    for(let k=0;k<n;k++) {
        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                if(rankArr[i][k] ===1 && rankArr[k][j] === 1) {
                    rankArr[i][j] = 1
                    rankArr[j][i] = -1
                } 
            }
        }
    }
    
    let cnt = 0
    
    for(let i=0;i<n;i++) {
        // 결과의 개수가 n-1 만큼 있다면 순위를 매길 수 있다.
        if(rankArr[i].filter(el => el !== 0).length === n-1) {
            cnt += 1
        }
    }
    
    
    return cnt;
}