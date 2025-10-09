const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, C] = input[0].split(" ").map(BigInt);

function power(base, ex) {
  if (ex === 1n) return base % C;

  if (ex % 2n === 0n) {
    const evenCase = power(base, ex / 2n) % C;
    return (evenCase * evenCase) % C;
  }

  if (ex % 2n === 1n) {
    const oddCase = power(base, (ex - 1n) / 2n) % C;
    return (((oddCase * oddCase) % C) * base) % C;
  }
}

console.log(power(A, B).toString());
