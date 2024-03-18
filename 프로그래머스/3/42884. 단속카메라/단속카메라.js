/*
모든 차량이 단속용 카메라를 한 번은 만나도록 카메라를 설치한다.
최소 몇 대의 카메라를 설치해야 하는지 구한다.

-20 -15 :  -20 ... -15
-15 -5  : -15 ... -5
-18 -13 : -18 ... -13
-5  -3  : -5 ... -3

*/

function solution(routes) {
    let count = 0
    let camera = -30000
    const sortedRoutes = routes.sort((a,b) => a[1] - b[1])
    
    sortedRoutes.forEach(route => {
        const [carIn,carOut] = route
        
        if(carIn > camera) {
            count += 1
            camera = carOut
        }
    })
    
    return count
}