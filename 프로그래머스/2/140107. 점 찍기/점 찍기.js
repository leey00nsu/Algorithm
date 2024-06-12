/*
두 양의 정수 k, d가 주어질 때 다음과 같이 점을 찍으려 합니다.
원점(0, 0)으로부터 x축 방향으로 a*k(a = 0, 1, 2, 3 ...), y축 방향으로 b*k(b = 0, 1, 2, 3 ...)만큼 떨어진 위치에 점을 찍습니다.
원점과 거리가 d를 넘는 위치에는 점을 찍지 않습니다.

점 (a,b) 에서 반지름 r인 원의 방정식은 (x-a)^2 + (y-b)^2 = r^2 이다.
이때, 원점에서 부터의 거리를 재므로 x^2 + y^2 = r^2 이다.
x와 r이 주어지므로, O(n) 시간안에 x에 대한 모든 y를 구할 수 있다.


k=2, d=4

x = 0, y^2 = 16 - 0 
x = 2, y^2 = 16 - 4  = 12 => 3
*/

function solution(k, d) {
    let dots = 0
    
    for(let i=0;i<=d;i+=k) {
        const maxY = Math.sqrt(d*d - i*i)
        const y = Math.floor(maxY / k) + 1
        
        dots += y
    }
    
    return dots;
}