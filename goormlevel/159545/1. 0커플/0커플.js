/*
지인은 항상 짝수이다.
0점은 존재하지 않는다.
같은 점수는 존재하지 않는다.

소개팅을 받지 못한 두 사람의 점수를 합한 값을 출력한다.
*/


// Run by Node.js
const readline = require('readline');
const input = []
const output = []

function solution(points) {
	const candidates = points.split(' ').map(Number)
	
	const sum = candidates.reduce((acc,cur) => acc+cur,0)
	
	return sum
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const [N,points] = input
	
	const sum = solution(points)
	
	console.log(sum)
	
	
	process.exit();
})();
