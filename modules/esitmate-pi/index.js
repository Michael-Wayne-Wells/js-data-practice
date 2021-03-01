const estimatePi = (n) => {
  let pointsInCircle = 0,
    pointsTotal = 0;

  for (let i = 0; i < n; i++) {
    let x = Math.random();
    let y = Math.random();
    let distance = x ** 2 + y ** 2;
    if (distance < 1) {
      pointsInCircle += 1;
    }
    pointsTotal += 1;
  }

  let pi = 4 * (pointsInCircle / pointsTotal);
  return pi;
};

module.exports = estimatePi;
