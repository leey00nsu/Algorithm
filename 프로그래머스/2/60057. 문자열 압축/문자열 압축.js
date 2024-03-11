/*
*/

function compression(s,n) {
    const result = []
    let temp = []
    const arr = s.split('')

    while(arr.length>0) {
        const subStr = arr.splice(0,n).join('')
        
        if(temp.length >0 && temp[0] !== subStr) {
            const length = temp.length > 1 ? temp.length : ''
            const tempStr = temp[0]
            result.push(`${length}${tempStr}`)
            
            temp = []
        }
        
        temp.push(subStr)
    }
    
    if(temp.length >0) {
        const length = temp.length > 1 ? temp.length : ''
        const tempStr = temp[0]
        result.push(`${length}${tempStr}`)

        temp = []
    }
    
    return result.join('').length
}


function solution(s) {
    let minLength = s.length
    
    for(let i=1;i<s.length;i++) {
        minLength = Math.min(minLength,compression(s,i))
    }
    
    
    return minLength;
}