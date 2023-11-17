// 가격이 떨어지지 않은 기간을 반환한다.
// 가격이 떨어지지 않는다는 것은 , 현재 배열의 인덱스로부터 값이 감소된 인덱스까지의 거리이다.
// 결과 배열의 마지막은 항상 0이다.

function solution(prices) {
    const answer = [];

    for (let i = 0; i < prices.length; i++) {
        let duration = 0;

        for (let j = i + 1; j < prices.length; j++) {
            duration++;

            if (prices[j] < prices[i]) {
                break;
            }
        }

        answer.push(duration);
    }

    return answer;
}