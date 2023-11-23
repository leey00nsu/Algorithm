function solution(survey, choices) {
    let answer = ''
    const map = {'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0}
    const weights = [0,-3,-2,-1,0,1,2,3]
    
    
    choices.forEach((choice,index) => {
        const [leftType,rightType] = survey[index]
        
        let weight = weights[choice]
        if(weight>0) {
            map[rightType] += Math.abs(weight)
        }
        if(weight<0) {
            map[leftType] += Math.abs(weight)
        }
        
    })
    
    answer += map['R'] >= map['T'] ? 'R':'T'
    answer += map['C'] >= map['F'] ? 'C':'F'
    answer += map['J'] >= map['M'] ? 'J':'M'
    answer += map['A'] >= map['N'] ? 'A':'N'
    
    
    
    return answer;
}