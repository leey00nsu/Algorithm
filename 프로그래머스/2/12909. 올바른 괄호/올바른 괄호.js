function solution(s){
    let answer = true;
    
    let depth = 0;

    const brackets = Array.from(s)
    const stack = []
    
    if(brackets.at(0) === ')' || brackets.at(-1) === '(') return false
    if(brackets.length % 2 === 1) return false
    
    for(bracket of brackets) {
        if(bracket === '(') {
            depth += 1
            stack.push(bracket)
        } else if(bracket === ')'){
            if(stack.length > 0 && depth > 0) {
                depth -= 1
                stack.pop()
            } else {
                return false
            }
        }
    }
    
    
    return stack.length === 0 ;
}