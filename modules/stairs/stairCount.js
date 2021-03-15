export default function stairCount(n) {
  let countArray = [1, 1];
  // if n is 0 or 1, answer will always be 1.
  // start loop with 1 and 0 accounted for
  for (let i = 1; i < n; i++) {
    let count = countArray[1] + countArray[0];
    // only need last two numbers
    countArray.splice(-1, 1);

    countArray.unshift(count);
    // last number counted will be the total possible. unshift and return first count.
  }
  return countArray[0];
}
