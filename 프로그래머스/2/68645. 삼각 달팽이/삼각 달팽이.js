function solution(n) {
    const arr = []
    let  cnt = 0
    let fill = 0
    
    for(let i=0;i<n;i++) {
        const subArr = []
        for(let j=0;j<=i;j++) {
            subArr.push(0)
            cnt+=1
        }
        arr.push(subArr)
    }
    
    let x = 0
    let y = 0
    

    while(fill < cnt) {

        while(y < n && arr[y][x] === 0) {

            arr[y][x] = fill+1
            fill += 1
            y+=1
        }
        
        y-=1
        x+=1
        
        
        while(x < n && arr[y][x] === 0) {

            arr[y][x] = fill+1
            fill += 1
            x+=1
        }
        
        x-=2
        y-=1
        
        
        while (x > 0 && y > 0 && arr[y][x] === 0) {

            arr[y][x] = fill+1
            fill += 1
            y-=1
            x-=1
        }
        
        y+=2
        x+=1
        
    }
    
    
    return arr.join().split(",").map(Number);
}