function solution(inputs) {
  let numberRange = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let newInputs = inputs.map((input) => {
    let inputArr = [...input];
    let head = [];
    let number = [];
    let tail = [];
    let mode = "head";
    while (inputArr.length > 0) {
      let shifted = inputArr.shift();
      if (numberRange.includes(shifted) && mode === "head") {
        mode = "number";
      }
      if (!numberRange.includes(shifted) && mode === "number") {
        mode = "tail";
      }
      if (mode === "head") {
        // head부분 배열에 넣기
        head.push(shifted);
      }
      if (mode === "number") {
        // head부분 배열에 넣기
        number.push(shifted);
      }
      if (mode === "tail") {
        // head부분 배열에 넣기
        tail.push(shifted);
        tail.push(...inputArr);
        break;
      }
    }

    while (number.length > 0 && number[0] === "0") {
      number.shift();
    }

    return {
      head: head.join(""),
      number: Number(number.join("")),
      tail: tail.join(""),
      origin: input,
    };
  });

  let sorted = newInputs.sort((a, b) => {
    if (a.head.toUpperCase() > b.head.toUpperCase()) return 1;
    if (a.head.toUpperCase() == b.head.toUpperCase()) {
      if (a.number > b.number) return 1;
      if (a.number == b.number) return 0;
      if (a.number < b.number) return -1;
    }
    if (a.head.toUpperCase() < b.head.toUpperCase()) return -1;
  });

  sorted = sorted.map((s) => {
    return s.origin;
  });

  return sorted;
}