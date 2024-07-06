/*
n = 2 , 3
n = 4 , dp[4-2]*3  + 2 = 11
n = 6 , dp[6-2]*3 + dp[6-4] * 2 + 2 = 41 
n = 8 , dp[8-2]*3 + dp[8-4] * 2 + dp[8-6] * 2 + 2 = 

*/


function solution(n) {
    const dp = Array(n+1).fill(0)
    
    dp[2] = 3
    
    for(let i=4;i<=n;i+=2) {
        let sum = dp[i-2] * 3
        
        for(let j=4;j<=i-2;j+=2) {
            sum += dp[i-j] * 2
        }
        
        sum += 2
        
        dp[i] = sum % 1000000007
    }
    
    return dp[n];
}