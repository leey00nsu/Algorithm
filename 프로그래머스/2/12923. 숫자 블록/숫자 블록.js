/*
블록에 적힌 번호가 n 일 때, 가장 첫 블록은 n * 2번째 위치에 설치합니다. 그 다음은 n * 3, 그 다음은 n * 4, ...위치에 설치합니다. 기존에 설치된 블록은 빼고 새로운 블록을 집어넣습니다.

특정 구간에 어떤 블록이 깔려 있는지 알고 싶습니다.

가장 마지막에 설치한 블록이 최종 블록이 된다.

1 -> 2,3,4,5...
2 -> 4,6,8,10...
3 -> 6,9,12,15...  
4 -> 8,12,16,20...  
5 -> 10,15,20,25... 
10 -> 20,30

4,10

4,5,6,7,8,9,10
*/

function solution(begin, end) {
    const blocks = []
    
    function getMaxNum(n) {
        if(n === 1) return 0
        
        let maxNumbers = []
        
        
        
        for(let j=2;j<= Math.sqrt(n);j++) {
            if(n % j === 0) {
                maxNumbers.push(j)
                if(n / j <= 10000000) {
                    return n / j
                }
            }
        }
        
        if(maxNumbers.length === 0) return 1
        
        return Math.max(...maxNumbers)
    }
    
    for(let i=begin;i<=end;i++) {
        blocks.push(getMaxNum(i))
    }
    
    return blocks;
}