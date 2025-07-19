function solution(clothes) {
    const set = {}
    
    clothes.forEach(cloth => {
        const [item,type] = cloth
        
        if(set[type]) {
            set[type].push(item)
        } else {
            set[type] = [item]
        }
    })
    
    let count = 1;
    
    for (type in set) {
        count *= set[type].length + 1
    }
    
    return count - 1;
}