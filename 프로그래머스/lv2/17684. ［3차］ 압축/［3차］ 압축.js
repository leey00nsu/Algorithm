function getKeybyValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

function findLongestW(msg, obj) {
  let length = 0;
  let w;
  for (let key in obj) {
    if (
      msg.startsWith(obj[key]) &&
      msg.includes(obj[key]) &&
      obj[key].length > length
    ) {
      length = obj[key].length;
      w = obj[key];
    }
  }

  if (length === 1) return msg[0];
  else return w;
}

function solution(msg) {
  let result = [];
  let dict = {};
  let i;
  // A부터 Z까지 딕셔너리에 할당
  for (i = 1; i < 27; i++) {
    dict[i] = String.fromCharCode(64 + i);
  }

  while (msg) {
    let w = findLongestW(msg, dict);

    result.push(Number(getKeybyValue(dict, w)));
    msg = msg.slice(msg.indexOf(w) + w.length);
    if (msg) {
      dict[i++] = w + msg[0];
    }
  }

  return result;
}