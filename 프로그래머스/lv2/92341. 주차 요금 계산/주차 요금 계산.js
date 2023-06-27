function calPrice(fees, total_min) {
  let [default_min, default_price, unit_min, unit_price] = fees;
  if (default_min >= total_min) {
    return default_price;
  } else {
    return (
      default_price +
      Math.ceil((total_min - default_min) / unit_min) * unit_price
    );
  }
}

function solution(fees, records) {
  let car_history = [];
  let result = [];
  let stack = [];

  records.forEach((record) => {
    let [time, carNum, history] = record.split(" ");
    let [hour, min] = time.split(":");
    let convertedMin = Number(hour * 60) + Number(min);
    if (history === "IN") {
      stack.push({
        convertedMin,
        carNum,
        history,
      });
    } else {
      let in_car = stack.filter((s) => s.carNum === carNum)[0];
      let in_min = in_car.convertedMin;
      stack = stack.filter((s) => s.carNum !== carNum);

      let selected_index = car_history.findIndex(
        (history) => history.carNum === carNum
      );
      if (selected_index !== -1) {
        car_history[selected_index].totalMin += convertedMin - in_min;
      } else {
        car_history.push({ carNum: carNum, totalMin: convertedMin - in_min });
      }
    }
  });

  stack.forEach((s) => {
    let no_out_min = 23 * 60 + 59;
    let selected_index = car_history.findIndex(
      (history) => history.carNum === s.carNum
    );
    if (selected_index !== -1) {
      car_history[selected_index].totalMin += no_out_min - s.convertedMin;
    } else {
      car_history.push({
        carNum: s.carNum,
        totalMin: no_out_min - s.convertedMin,
      });
    }
  });

  car_history.sort((a, b) => {
    if (a.carNum > b.carNum) return 1;
    if (a.carNum < b.carNum) return -1;
  });

  car_history.forEach((history) => {
    result.push(calPrice(fees, history.totalMin));
  });

  return result;
}