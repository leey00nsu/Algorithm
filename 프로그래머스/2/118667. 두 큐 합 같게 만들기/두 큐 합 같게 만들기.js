// 길이가 같은 두 개의 큐가 주어진다.
// 하나의 큐에서 원소를 추출해 , 다른 큐에 넣는다.
// 이 작업을 큐의 원소의 합이 같을때까지 반복한다.
// 이때 필요한 작업의 최소 횟수를 구해야 한다.
// 왼쪽 큐와 오른쪽 큐의 시작 점과 끝 점을 설정한다.
// 이떄 큐의 합이 큰 쪽에서 큐를 pop해야 하므로 , 큐의 합이 큰 쪽의 시작 점을 오른쪽으로 옮기고 작은 쪽의 끝 점을 오른쪽으로 옮긴다.
// 투 포인터 알고리즘으로 큐의 합을 계산해 나가며 같을 때 횟수를 센다.
// 만약 한쪽 큐가 끝에 다다를 경우 해가 없으므로 -1를 리턴한다.






function solution(queue1, queue2) {
    let doubleArr = [...queue1,...queue2,...queue1,...queue2]
    let cnt = 0;
    let queue1StartIndex = 0
    let queue1EndIndex = queue1.length-1
    let queue1Sum = queue1.reduce((prev=0,cur) => prev+=cur)
    let queue2StartIndex = queue1.length
    let queue2EndIndex = queue2.length-1
    let queue2Sum = queue2.reduce((prev=0,cur) => prev+=cur)
    
    while(queue1Sum !== queue2Sum) {
        if(cnt > queue1.length*2+1) {
            return -1
        }
        if(queue1Sum > queue2Sum) {
            queue1Sum -= doubleArr[queue1StartIndex]
            queue2Sum += doubleArr[queue1StartIndex]
            queue1StartIndex +=1
            queue2EndIndex +=1
        }
        else if(queue1Sum < queue2Sum) {
            queue2Sum -= doubleArr[queue2StartIndex]
            queue1Sum += doubleArr[queue2StartIndex]
            queue2StartIndex +=1
            queue1EndIndex +=1
        }
        cnt+=1
    }
    
    
    
    return cnt;
}