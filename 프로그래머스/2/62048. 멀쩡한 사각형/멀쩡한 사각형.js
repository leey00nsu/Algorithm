function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(w, h) {
    const maxSquare = w * h
    
    const ripped = w + h - gcd(w,h)
    
    
    return maxSquare - ripped;
}