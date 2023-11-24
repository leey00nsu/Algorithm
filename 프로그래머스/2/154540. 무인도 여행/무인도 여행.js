// 지도에는 X 또는 1~9 가 적혀있다.
// X는 바다이며 숫자는 무인도를 나타낸다.
// 이때, 상하좌우로 연결되는 땅은 하나의 무인도를 이룬다.
// 하나로 연결된 무인도의 숫자의 합은 무인도에서 머물 수 있는 날짜를 의미한다.
// 무인도에서 머물 수 있는 날짜 배열을 구해라.
// DFS


function solution(maps) {
    const stack = []
    const visited = []
    const result = []
    
    for(let i=0;i<maps.length;i++) {
        const subArr = []
        for(let j=0;j<maps[0].length;j++) {
            if(maps[i][j] !== 'X') {
                stack.push([i,j])
                subArr.push(false)
            } else {
                subArr.push(true)
            }
            
        }
        visited.push(subArr)
    }
    
    function dfs(i,j) {
        let cnt = 0
        
        if(i>maps.length-1 || i<0 || j>maps[0].length-1 || j<0) return 0
        if(visited[i][j]) return 0 
        
        cnt += Number(maps[i][j])
        visited[i][j] = true
        
        cnt += dfs(i-1,j)    

        cnt += dfs(i+1,j)    

        cnt += dfs(i,j+1)    

        cnt += dfs(i,j-1)    
       
        
        return cnt
    }
    
    while(stack.length > 0 ) {
        const [i,j] = stack.pop()
        
        result.push(dfs(i,j))
    }
    

    return result.length === 0 ? [-1] : result.filter(n => n>0).sort((a,b) => a-b);
}