const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

for (i of input) {
  const target = [...i].filter((x) => ["(", ")", "[", "]"].includes(x));
  let isBalanced = true;

  const stack = [];

  for (t of target) {
    if (t === "(" || t === "[") {
      stack.push(t);
    } else {
      if (stack.length === 0) {
        isBalanced = false;
        break;
      }
      const last = stack.pop();
      if ((last === "(" && t === "]") || (last === "[" && t === ")")) {
        isBalanced = false;
        break;
      }
    }
  }

  if (stack.length > 0) {
    isBalanced = false;
  }

  console.log(isBalanced ? "yes" : "no");
}
