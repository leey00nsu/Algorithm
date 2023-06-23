function isPrime(n) {
  if (n === 0) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  let cnt = 0;
  let k_number = n.toString(k);

  console.log(k_number);

  let arr = k_number.split(/0+/g);

  if (arr.length === 1) {
    if (isPrime(k_number)) return 1;
    else return 0;
  }
  arr.forEach((v, index, arr) => {
    if (v === "1") {
      return;
    }
    if (isPrime(Number(v))) {
      cnt += 1;
    }
  });

  return cnt;
}