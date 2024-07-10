/*
현재 좌표가 가장 외곽임을 알아야 한다.

*/

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const maxX = 50*2
    const maxY = 50*2
    const arr = Array(maxX+2).fill(0).map(el => Array(maxX+2).fill(0))
    
    
    rectangle = rectangle.map(el => el.map(v => v*2))
    characterX *= 2
    characterY *= 2
    itemX *= 2
    itemY *= 2
    
    const dx = [1,0,-1,0]
    const dy = [0,1,0,-1]
    
    for(let i=0;i<rectangle.length;i++) {
        const [startX,startY,endX,endY] = rectangle[i]
        
        for(let i=startX;i<=endX;i++) {
            for(let j=startY;j<=endY;j++) {
                arr[i][j] = 1
            }
        }
    }
    
    function isEmpty(x,y) {
        return arr[x][y] === 0
    }
    
    function isOutline(x,y) {  
        if(isEmpty(x-1,y)) return true
        if(isEmpty(x-1,y+1)) return true
        if(isEmpty(x-1,y-1)) return true
        if(isEmpty(x,y-1)) return true
        if(isEmpty(x,y+1)) return true
        if(isEmpty(x+1,y)) return true
        if(isEmpty(x+1,y+1)) return true
        if(isEmpty(x+1,y-1)) return true
        
        return false
    }
    
    
    for(let i=1;i<=maxX;i++) {
        for(let j=1;j<=maxY;j++) {
            if(arr[i][j] === 1 && isOutline(i,j)) {
                arr[i][j] = 2
            }
        }
    }
    
    const queue = [[characterX,characterY,0]]
    
    while(queue.length > 0) {
        const [x,y,cnt] = queue.shift()
        
        if(x === itemX && y === itemY) return cnt / 2
        
        
        for(let i=0;i<4;i++) {
            const newX = x+dx[i]
            const newY = y+dy[i]
            
            if(newX < 1 || newX > maxX || newY < 1 || newY > maxY) continue
            if(arr[newX][newY] === 2) {
                arr[newX][newY] = [0]
                queue.push([newX,newY,cnt+1])
            }
        }
    }
}