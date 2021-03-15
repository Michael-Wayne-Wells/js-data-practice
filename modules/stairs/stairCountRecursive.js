export default function stairCountRecursive(n, countArray = [1, 1]) {
  if (n <= 1) return countArray[1];
  countArray = [countArray[1], countArray[1] + countArray[0]];
  return stairCountRecursive(n - 1, countArray);
}
