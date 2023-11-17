// 택배 상자는 크기가 모두 같고, 번호가 증가하는 순서대로 전달된다.
// 컨테이너 벨트의 놓인 순서대로만 상자를 내릴 수 있다.
// 미리 알려준 순서에 맞게 트럭에 상자를 실어야 한다.
// 상자가 현재 순서가 아니라면 보조 컨테이너 벨트에 실을 수 있다.
// 보조 컨테이너는 입구가 하나이며, 맨 앞의 상자만 내릴 수 있다.
// 만약 보조 컨테이너를 사용했는데도 순서에 맞지 않는다면 , 더이상 싣지 않는다.

// 상자는 [1,2,3,4,5] 로 전달됨
// [4,3,1,2,5] 로 실어야 함

// 1 -> 보조컨테이너 / 현재 보조 컨테이너 : [1]
// 2 -> 보조컨테이너 / 현재 보조 컨테이너 : [1,2]
// 3 -> 보조컨테이너 / 현재 보조 컨테이너 : [1,2,3]
// 4 -> 트럭
// 보조컨테이너 3 -> 트럭 / 현재 보조 컨테이너 : [1,2]
// 보조컨테이너에서는 2를 , 컨테이너벨트에서는 5를 받으므로 더이상 실을 수 없음.
// 실은 상자 개수는 2개

function solution(order) {
    let truck = []
    let belt = []
    let subBelt = []
    for(let i=0;i<order.length;i++) {
        belt.push(i+1)
    }
    let orderIndex = 0
    let beltIndex = 0 
    
    while(orderIndex<order.length) {
        let currentOrder = order[orderIndex]
        if(belt[beltIndex] === currentOrder) {
            truck.push(currentOrder)
            orderIndex+=1
            beltIndex+=1
        } else {
            if(belt[beltIndex] !== currentOrder && subBelt.at(-1) !== currentOrder && beltIndex === order.length-1) {
                break
            }
            if(subBelt.at(-1) === currentOrder) {
                subBelt.pop()
                orderIndex+=1
                truck.push(currentOrder)
            } else {
                subBelt.push(belt[beltIndex])
                beltIndex+=1
            }

        }
       
    }
    
    
    return truck.length;
}