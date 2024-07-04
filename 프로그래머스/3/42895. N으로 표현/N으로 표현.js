/*
+ - / *

10

1-12
11

22/2
*/


function solution(N, number) {
    const dp = Array(N+1).fill([])
    
    if(N === number) return 1
    
    dp[1].push(N)
    
    function calc(a,b,op) {
        if(op === '+') {
            return a+b
        }
        if(op === '-') {
            return a-b
        }
        if(op === '*') {
            return a*b
        }
        if(op === '/') {
            return Math.floor(a/b)
        }
    }
    
    for(let i=2;i<=8;i++) {
        const candidates = []
        
        candidates.push(Number(N.toString().repeat(i)))
        
        for(let j=1;j<i;j++) {
            const leftNumbers = dp[j]
            const rightNumbers = dp[i-j]
            
            leftNumbers.forEach(l => {
                rightNumbers.forEach(r => {                   
                    candidates.push(calc(l,r,'+'))
                    candidates.push(calc(l,r,'-'))
                    if(r !== 0) {
                        candidates.push(calc(l,r,'/'))    
                    }
                    candidates.push(calc(l,r,'*'))
                })
            })  
        }
        
        const uniqueCandidates = [...new Set(candidates)]
        
        if(uniqueCandidates.includes(number)) return i
        
        dp[i] = uniqueCandidates
    }
    
    
    return -1;
}