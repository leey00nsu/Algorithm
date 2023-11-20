// 문자열 형식으로 숫자가 주어진다.
// 이 숫자에서 k개의 수를 제거했을 때 가장 큰 숫자를 구한다.
// k개의 수를 제거하였을 때의 자리수를 구한다.
// 가장 큰 숫자가 되려면 , 해당 자릿수의 숫자중 가장 커야한다.
// 가장 큰 해당 자릿수의 수를 구하고 , 그 수의 자릿수 다음으로부터 자리수-1의 숫자중 가장 큰 숫자를 구한다.
// 이를 마지막 수까지 반복한다.


function solution(number, k) {
    const stack = []
    const arr = number.split('').reverse()
    const targetDigit = number.length-k
    
    while(arr.length > 0) {
        stack.push(arr.pop())
        while(stack.at(-1) < arr.at(-1) && k>0) {
            stack.pop()
            k-=1
        }
    }


    return stack.slice(0,targetDigit).join('');
}