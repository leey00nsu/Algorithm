function solution(phone_book) {
    const set = {}
    
    for(let i=0; i<phone_book.length; i++) {
        const current = phone_book[i]
        
        set[current] = true
    }
    
    for(let i=0; i<phone_book.length; i++) {
        const current = phone_book[i]
        let temp = ''
        
        for(let j=0; j<current.length; j++) {
            temp += current[j]
            
            if(current != temp && set[temp] ) {
                return false
            }
        }
        
        set[current] = true
    }
    
    return true;
}