
function solution(n) {
    const result = []
    
    function hanoi(n,from,to,sub) {
        if(n===1) {
            result.push([from,to])
            return
        }

        hanoi(n-1,from,sub,to) 
        result.push([from,to])
        hanoi(n-1,sub,to,from) 
    }

    
    hanoi(n,1,3,2)
    
    
    
    return result;
}