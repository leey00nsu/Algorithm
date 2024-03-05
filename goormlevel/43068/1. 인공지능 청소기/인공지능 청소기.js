/*
예약 청소 기능은 설정한 시간과 장소에 정확하게 도착하는 기능이다.
이 과정에서 동일한 위치를 두 번 이상 지나칠 수 있다.

집은 2차원 정수 좌표계로 포현하며, 초기 위치는 (0,0) 이다.
로봇 청소기는 1초에 한 번 1의 거리로 움직인다.
지나간 칸을 다시 지나갈 수 있다.
설정한 N초의 시간에 (X,Y) 에 위치해 있어야 한다.

X,Y의 절대값의 합은 해당 위치까지의 거리를 의미한다.
만약 이 절대값의 합이 홀수인 경우 -> N이 홀수인 경우에만 도착할 수 있다
만약 이 절대값의 합이 짝수인 경우 -> N이 짝수인 경우에만 도착할 수 있다.
이 외에는 정확히 도착할 수 없다.
이 거리가 주어진 N보다 클 경우에는 절대로 도착할 수 없다.
*/ 


// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = []
const output = []

function solution(arr) {
	const [X,Y,N] = arr.split(' ').map(Number)
	const distance = Math.abs(X) + Math.abs(Y)
	
	if(N < distance) return 'NO'
	if(N%2 !== distance%2) return 'NO'
	return 'YES'
}

rl.on("line", function(line) {
	input.push(line)
	if(!line) {
		rl.close();
	}
}).on("close", function() {
	const T = input.shift()
	
	for (const candidate of input) {
		output.push(solution(candidate))
	}
	
	for (const result of output) {
		console.log(result)
	}
	
	process.exit();
});