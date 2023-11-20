// 0부터 9까지의 숫자로 이루어진 문자열이 주어진다.
// 이 숫자들로 만들 수 있는 소수의 개수를 알아내야 한다.

function isPrimeNumber(arr) {
    const primeArr = arr.filter(number => {
        if(number < 2) return false
        for(let i=2;i<number;i++) {
            if(number%i === 0) return false
        }
        return number
    })
   
    return primeArr
} 


function solution(numbers) {
    let arr = Array.from(numbers)
    let candidates = []
    
    while(arr.length > 0) {
        let lastNumber = arr.pop()
        candidates.forEach(candidate => {
            for(let i=0;i<=candidate.length;i++) {
                let newCandidate = Array.from(candidate)
                newCandidate.splice(i,0,lastNumber)
                candidates.push(newCandidate.join().replaceAll(',',''))
            }
        })
        if(!candidates.includes(lastNumber)) {
            candidates.push(lastNumber)
        }
    }
    candidates = Array.from(new Set(candidates.map(Number)))
    const primeArr = isPrimeNumber(candidates)
    
    return primeArr.length;
}