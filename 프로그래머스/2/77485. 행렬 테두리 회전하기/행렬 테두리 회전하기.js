/*

0,0 0,1 0,2
1,0 1,1 1,2
2,0 2,1 2,2
*/

function solution(rows, columns, queries) {
    const result = []
    const arr = []
    
    for(let i=0;i<rows;i++) {
        const subArr = []
        for(let j=1;j<=columns;j++) {
            subArr.push(i*columns + j)
        }
        
        arr.push(subArr)
    }
    
    
    
    queries.forEach(q => {
        const [r1,c1,r2,c2] = q.map(el => el - 1)
        const changes = []
        
        let r = r1
        let c = c1
        let temp = arr[r][c]

        while(c < c2) {
            c += 1
            const current = arr[r][c]
            changes.push(current)
            
            arr[r][c] = temp
            temp = current
            
            if(c === c2) break
        }


        while(r < r2){
            r += 1
            const current = arr[r][c]
            changes.push(current)
            
            arr[r][c] = temp
            temp = current
            
            if(r === r2) break        
        }
        
        while(c > c1){
            c -= 1
            const current = arr[r][c]
            changes.push(current)
            
            arr[r][c] = temp
            temp = current
            
            if(c === c1) break        
        }
            

        while(r > r1){
            r -= 1
            const current = arr[r][c]
            changes.push(current)
            
            arr[r][c] = temp
            temp = current
            
            if(r === r1) break   
        }

        const minChange = Math.min(...changes)

        result.push(minChange)
    })
    
    
    
    return result;
}