function parseTime(time) {
  const [hour, minute] = time.split(":");

  return Number(hour) * 60 + Number(minute);
}

function solution(plans) {
  let sortedPlans = plans
    .sort((b, a) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
    })
    .map((plan) => {
      const [name, start, playtime] = plan;
      return [name, parseTime(start), Number(playtime)];
    });

  let pausedPlans = [];
  let donePlans = [];

  while (sortedPlans.length > 0) {
    sortedPlans = sortedPlans.sort((b, a) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
    });

    let currentPlan = sortedPlans.pop();
    let [name, start, playtime] = currentPlan;
    if (sortedPlans.length === 0) {
      donePlans.push(name);
      if (pausedPlans.length > 0) {
        donePlans = [
          ...donePlans,
          ...pausedPlans.reverse().map((plan) => plan[0]),
        ];
      } else {
        break;
      }
      continue;
    }
    let nextPlan = sortedPlans.at(-1);
    let [nextName, nextStart, nextPlaytime] = nextPlan;

    let expectedEndTime = start + playtime;
    if (expectedEndTime > nextStart) {
      let lefttime = playtime - (nextStart - start);
      pausedPlans.push([name, start, lefttime]);
    } else {
      donePlans.push(name);
      if (pausedPlans.length > 0) {
        let latestPlan = pausedPlans.pop();
        let [latestName, latestStart, latestPlaytime] = latestPlan;
        sortedPlans.push([latestName, expectedEndTime, latestPlaytime]);
      }
    }

  }

  return donePlans;
}