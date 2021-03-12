export default function fruits_into_baskets(fruits) {
  let end = 1,
    currentHigh = 0,
    start = 0;
  while (end < fruits.length) {
    let fruitTree = {};

    for (let i = start; i < fruits.length; i++) {
      end = i + 1;
      let fruit = fruits[i];
      if (!(fruit in fruitTree)) {
        if (Object.keys(fruitTree).length == 2) break;
        fruitTree[fruit] = 0;
      }
      fruitTree[fruit] += 1;
    }
    let newCount = Object.values(fruitTree).reduce((t, v) => t + v);
    if (newCount > currentHigh) currentHigh = newCount;
    start += 1;
  }
  return currentHigh;
}
