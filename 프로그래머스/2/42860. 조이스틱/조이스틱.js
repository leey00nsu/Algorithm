// A - Z
// B
// A에서 Z로 가는데 1번 소요된다.



function solution(name) {
    let dp = []
    let cursorDP = []
    let minXmove = name.length-1
    
    for(let i=0;i<26;i++){
        dp.push(i)
    }
    
    for(let i=1;i<26;i++){
        dp[26-i] = Math.min(dp[26-i],dp[0]+i)
        
    }
    
    
    
    let cnt = 0
    
    name.split('').forEach((letter,index) => {
        cnt += dp[letter.charCodeAt()-65]
        
        let idx = index + 1;

        while (idx < name.length && name[idx] === 'A') {
          idx++;
        }

        minXmove = Math.min(
          minXmove,
          index * 2 + name.length - idx,
          index + 2 * (name.length - idx),
        );
    })
    
    cnt += minXmove
    
    
    

    
    
    
    return cnt;
}