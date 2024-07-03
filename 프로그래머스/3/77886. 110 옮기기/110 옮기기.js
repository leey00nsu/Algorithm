/*
문자열 x에 대해 사전 순으로 앞에 오도록 만들고자 합니다.

모든 '110' 을 추출한다.
110을 제거한 문자열에 110을 삽입한다.

*/

function solution(s) {
    const result = []
    
    s.forEach(str => {
        let count = 0
        let stack = []
        
        for(let i=0;i<str.length;i++) {
            stack.push(str[i])
            
            if(stack.length >=3 && stack.slice(-3).join('') === '110') {
                stack.pop()
                stack.pop()
                stack.pop()
                count += 1
            }
        }
        
        let insertIndex = 0
    
        for(let i=stack.length-1;i>=0;i--) {
            if(stack[i] === '0') {
                insertIndex = i+1
                break
            }
        }
        
        
        const resultStr = stack.slice(0,insertIndex).join('') + '110'.repeat(count) + stack.slice(insertIndex).join('')
            
        result.push(resultStr)
    })
    


    return result
}