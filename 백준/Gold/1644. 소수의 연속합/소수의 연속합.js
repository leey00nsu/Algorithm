const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

function getPrimes(n) {
  let arr = Array(n + 1).fill(true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.map((x, idx) => (x ? idx : 0)).filter((x) => x);
}

const primes = getPrimes(N);
let l = 0;
let count = 0;
let sum = 0;

for (let r = 0; r < primes.length; r++) {
  sum += primes[r];

  while (sum >= N) {
    if (sum === N) count++;

    sum -= primes[l];
    l++;
  }
}

console.log(count);
