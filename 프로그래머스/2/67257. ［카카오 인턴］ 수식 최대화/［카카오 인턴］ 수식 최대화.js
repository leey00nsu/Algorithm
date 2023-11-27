// 숫자와 3가지 연산문자 (+,-,*) 가 주어진다.
// 연산자의 우선순위를 재정의하여 가장 큰 숫자를 만든다.
// 같은 순위의 연산자는 존재할 수 없다.

function calculate(l,r,op) {
    if(op === '+') return l+r
    if(op === '-') return l-r
    if(op === '*') return l*r
}

function solution(expression) {
    let maxResult = 0
    let operatorCandidates = [['+','-','*'],['+','*','-'],['-','+','*'],['-','*','+'],['*','+','-'],['*','-','+']]
    
    operatorCandidates.forEach(ops => {
        let arr = expression.split(/(\+|\-|\*)/)
        
        ops.forEach(op => {
            while(arr.includes(op)) {
              let opIndex = arr.findIndex(el => el === op)
                if(opIndex !== -1) {
                    let leftOperand = Number(arr[opIndex-1])
                    let rightOperand = Number(arr[opIndex+1])
                    arr.splice(opIndex-1,3,calculate(leftOperand,rightOperand,op))
                }
            }
        })
        
        maxResult = maxResult > Math.abs(arr[0]) ? maxResult : Math.abs(arr[0])      
    })
    
    return maxResult;
}