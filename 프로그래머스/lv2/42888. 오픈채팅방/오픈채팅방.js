function solution(record) {
  let users = {};
  let result = [];

  record.forEach((r) => {
    let [order, uid, userName] = r.split(" ");
    if (order === "Enter") {
      users[uid] = userName;
    } else if (order === "Change") {
      users[uid] = userName;
    } else {
    }
  });

  record.forEach((r) => {
    let [order, uid, userName] = r.split(" ");
    let lastUserName = users[uid];
    if (order === "Enter") {
      let msg = `${lastUserName}님이 들어왔습니다.`;
      result.push(msg);
    } else if (order === "Leave") {
      let msg = `${lastUserName}님이 나갔습니다.`;
      result.push(msg);
    }
  });

  return result;
}