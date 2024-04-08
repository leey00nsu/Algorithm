/*
잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고 
특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.
열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다.
열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.

Lock의 빈 부분을 회전시켜, Key와 일치하면 열 수 있다

0,0 0,1 0,2     2,0 1,0 0,0     2,2 2,1 2,0
1,0 1,1 1,2     2,1 1,1 0,1     1,2 1,1 1,0
2,0 2,1 2,2     2,2 1,2 0,2     0,2 0,1 0,0

1 1 1   1 1 1
1 1 0   0 1 1
1 0 1   1 0 1

*/

function rotateClockWise(arr) {
    const rotatedArr = Array(arr.length).fill(0).map(() => Array(arr.length))
    
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            rotatedArr[j][arr.length-1-i] = arr[i][j]
        }
    }
    
    return rotatedArr
}

function solution(key, lock) {
    let rotation = 0
    let arr = [...lock]
    const keys = []
    const keysCandidates = []
    let lockCnt = 0
    
    for(let i=0;i<key.length;i++) {
        for(let j=0;j<key.length;j++) {
            if(key[i][j] === 1) {
                keys.push([i,j])
            }
        }
    }
    
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            if(arr[i][j] === 0) {
                lockCnt += 1
            }
        }
    }
    
    for(let i=-arr.length-1;i<arr.length;i++) {
        for(let j=-arr.length-1;j<arr.length;j++) {
            const candidate = keys.map(k => {
                const [i2,j2] = k
                const movedI = i2+i
                const movedJ = j2+j
                if(movedI >= 0 && movedI < arr.length && movedJ >= 0 && movedJ < arr.length) {
                    return [movedI,movedJ]
                } else {
                    return null
                }
            }).filter(el => el)
            
            if(candidate.length >= lockCnt) {
                keysCandidates.push(candidate)
            }
            
        }
    }
    
    while(rotation < 360) {
        let isMatched = false
        
        keysCandidates.forEach(kC => {
            let matched = 0
            kC.forEach(k => {
                const [i,j] = k
                if(arr[i][j] === 0) matched +=1
                else matched = -9999
            })
            if(matched === lockCnt) isMatched = true
        })
        
        if(isMatched) return true
        
        rotation += 90
        arr = rotateClockWise(arr)
        
    }
    
   
    return false;
}