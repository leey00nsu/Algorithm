/*
7
111

8
1000

5
101

011


42
0101010
1010100

63
0111111
1111110

95
1011111

8421
15 = 24816
1111
01111

재귀적으로 서브트리를 검색해서 가능한지 조사한다.
*/


function solution(numbers) {
    const result = []
    const treeMap = {}
    
    function isValidTree(str) {
        if(str.length === 1) return true
        
        if([...str].every(el => el === '0') || [...str].every(el => el === '1')) return true
        
        let mid = Math.floor(str.length / 2)
        
        if(str[mid] === '0') return false
        
        return isValidTree(str.slice(0,mid)) && isValidTree(str.slice(mid+1))
    }
    
    function getLength(n) {
        let h = 1
        while(true)  {
            const length = 2**h - 1
            
            if(n <= length) return length
            
            h += 1
        }
    }
    
    numbers.forEach(n => {
        let str = n.toString(2)
        const strLength = str.length
        const nodeLength = getLength(strLength)
    
        for(let i=0;i<nodeLength-strLength;i++) {
            str = '0' + str
        }
        
        const isValid = isValidTree(str)
        result.push(isValid ? 1 : 0)
    })
    
    
    return result;
}