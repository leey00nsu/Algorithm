function solution(numbers) {
    const mapped = numbers.map(x => String(x))
    
    mapped.sort((a,b) => (b+a) - (a+b))
    
    if(mapped[0] === '0') return '0'
    
    return mapped.join('')
}