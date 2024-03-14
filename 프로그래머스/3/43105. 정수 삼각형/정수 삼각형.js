/*
        7
     10  15
   18  16 15
  20 25  20 19
24  30 27 26  24
   
*/

function solution(triangle) {
    
    for(let i=0;i<triangle.length-1;i++) {
        const parent = triangle[i]
        
        triangle[i+1] = triangle[i+1].map((child,cIdx)=>{
            let maxSum = 0
            if(cIdx === 0) {
                maxSum = child+parent[0]
            }
            else if(cIdx === triangle[i+1].length-1) {
                maxSum = child+parent[cIdx-1]
            }
            else {
                maxSum = Math.max(child+parent[cIdx-1],child+parent[cIdx])
            }
            
            return maxSum
        })
    }
    
    
    return Math.max(...triangle.at(-1));
}