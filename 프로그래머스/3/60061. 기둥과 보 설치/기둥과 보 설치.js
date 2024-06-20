/*
기둥과 보는 길이가 1인 선분으로 표현되며 다음과 같은 규칙을 가지고 있습니다.
    기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
    보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
*/

function solution(n, build_frame) {
    const arr = []
    let result = []
    
    for(let i=0;i<=n;i++) {
        const subArr = []
        
        for(let j=0;j<=n;j++) {
            subArr.push([])
        }
        arr.push(subArr)
    }
    
    function checkIsOnFloor(x,y) {
        return y === n
    }
    
    function checkIsOnOtherKidung(x,y) {
        return (y+1 <= n && arr[y+1][x].includes(0))
    }
    
    function checkIsEndOfBo(x,y) {
        return arr[y][x].includes(1) || (x-1 >= 0 && arr[y][x-1].includes(1))
    }
    
    function checkIsOnKidung(x,y) {
        return (y+1 <= n && arr[y+1][x].includes(0)) || (y+1 <= n && x+1 <= n && arr[y+1][x+1].includes(0))
    }
    
    function checkIsConnected(x,y) {
        return (x-1 >= 0 && arr[y][x-1].includes(1)) && (x+1 <= n && arr[y][x+1].includes(1))
    }
    
    function checkIsValidKidung(x,y) {
        return checkIsOnFloor(x,y) || checkIsOnOtherKidung(x,y) || checkIsEndOfBo(x,y)
    }
    
    function checkIsValidBo(x,y) {
        return checkIsOnKidung(x,y) || checkIsConnected(x,y)
    }
    
    build_frame.forEach(bf => {
        const [rx,ry,a,b] = bf
        
        const x = rx
        const y = n - ry
    

        // 설치
        if(b === 1) {
            // 기둥
            if(a === 0) {
                if(checkIsValidKidung(x,y)) {
                    arr[y][x].push(0)
                    result.push([rx,ry,a])
                }
            }
            // 보
            if(a === 1) {
                if(checkIsValidBo(x,y)) { 
                    arr[y][x].push(1)
                    result.push([rx,ry,a])
                }
            }
        }
        // 삭제
        if(b === 0) {
            // 기둥
            if(a === 0) {
                let isOk = true
                // 우선 삭제
                arr[y][x] = arr[y][x].filter(el => el !== 0)
                
                // 모든 기둥, 보 체크
                for(let i=0;i<result.length;i++) {
                    const [rElX,rElY,rElA] = result[i]
                    const elX = rElX
                    const elY = n - rElY
                    
                    if(rElA === 0 && !checkIsValidKidung(elX,elY)) {
                        isOk = false
                        break
                    }
                    if(rElA === 1 && !checkIsValidBo(elX,elY)) {
                        isOk = false
                        break
                    }
                }
                
                // 삭제할 수 있는 경우
                if(isOk) {
                    result = result.filter(r => !(r[0] === rx && r[1] === ry && r[2] === a))
                }
                else {
                    arr[y][x].push(0)
                }
            }
            // 보
            if(a === 1) {
                let isOk = true
                // 우선 삭제
                arr[y][x] = arr[y][x].filter(el => el !== 1)
                
                // 모든 기둥, 보 체크
                for(let i=0;i<result.length;i++) {
                    const [rElX,rElY,rElA] = result[i]
                    const elX = rElX
                    const elY = n - rElY
                    
                    if(rElA === 0 && !checkIsValidKidung(elX,elY)) {
                        isOk = false
                        break
                    }
                    if(rElA === 1 && !checkIsValidBo(elX,elY)) {
                        isOk = false
                        break
                    }
                }
                
                // 삭제할 수 있는 경우
                if(isOk) {
                    result = result.filter(r => !(r[0] === rx && r[1] === ry && r[2] === a))
                }
                else {
                    arr[y][x].push(1)
                }
            }
        }
    })
    
    return result.sort((a,b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}