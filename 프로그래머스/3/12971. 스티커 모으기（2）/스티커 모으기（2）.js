/*
N개의 스티커가 원형으로 연결되어 있다.
스티커를 뜯어내, 스티커 숫자의 합이 최대가 되도록 한다.
스티커를 뜯어내면, 해당 스티커 양쪽의 스티커는 사용할 수 없게된다.

짝수 홀수로 나누어 경우의 수 계산
*/


function solution(sticker) {
    if(sticker.length === 1) return sticker[0]
    if(sticker.length === 2) return Math.max(...sticker)
    
    const evenDp = sticker.slice(0,sticker.length-1)
    const oddDp = sticker.slice(1,sticker.length)
    
    for(let i=1;i<evenDp.length;i++) {
        if(i===1) evenDp[i] = Math.max(evenDp[i-1], evenDp[i])
        else evenDp[i] = Math.max(evenDp[i-1], evenDp[i-2]+evenDp[i])
    }
    
    for(let i=1;i<oddDp.length;i++) {
        if(i===1) oddDp[i] = Math.max(oddDp[i-1], oddDp[i])
        else oddDp[i] = Math.max(oddDp[i-1], oddDp[i-2]+oddDp[i])
    }
    
    
    return Math.max(evenDp.at(-1),oddDp.at(-1))
}