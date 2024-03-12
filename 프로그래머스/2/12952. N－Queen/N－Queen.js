

function solution(n) {
    let cnt = 0
    const arr = []
    
    for(let i=0;i<n;i++) {
        arr.push(false)
    }
    
    function isPromising(row) {
        for(let i=0;i<row;i++) {
            if(arr[i] === arr[row] || row-i === Math.abs(arr[row]-arr[i]))
                return false
        }
        
        return true
    }
    
    function setQueen(row) {
        if(row>=n) {
            return cnt += 1    
        }
            
        
        
        for(let i=0;i<n;i++) {
            arr[row] = i
            
            if(isPromising(row)) {
                setQueen(row+1)
            }
        }
    }
        
    setQueen(0)
    
    return cnt;
}