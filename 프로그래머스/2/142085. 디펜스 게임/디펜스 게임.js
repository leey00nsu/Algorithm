/*
디펜스 게임은 준호가 보유한 병사 n명으로 연속되는 적의 공격을 순서대로 막는 게임입니다

준호는 처음에 병사 n명을 가지고 있습니다.
매 라운드마다 enemy[i]마리의 적이 등장합니다.
남은 병사 중 enemy[i]명 만큼 소모하여 enemy[i]마리의 적을 막을 수 있습니다
    남은 병사의 수보다 현재 라운드의 적의 수가 더 많으면 게임이 종료됩니다.
게임에는 무적권이라는 스킬이 있으며, 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있습니다.
무적권은 최대 k번 사용할 수 있습니다.

준호는 무적권을 적절한 시기에 사용하여 최대한 많은 라운드를 진행하고 싶습니다.

*/

function canDefense(n,k,enemy) {
    for(let i=0;i<enemy.length;i++) {
        if(k >= 1) {
            k -= 1
            continue
        }
        
        n -= enemy[i]
        
        if(n<0) return false
    }
    
    return true
}

function solution(n, k, enemy) {
    let round = 0;
    
    if(n >= enemy.reduce((acc,cur) => acc+=cur,0)) return enemy.length
    if(k >= enemy.length) return enemy.length
    
    let left = 0
    let right = enemy.length - 1
    
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        const slicedEnemy = enemy.slice(0,mid+1).sort((a,b) => b - a)
        
        if(canDefense(n,k,slicedEnemy)) {
            left = mid+1
        } else {
            right = mid-1
        }
    }
    
    return left;
}