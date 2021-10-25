let memo = { 0: 1, 1: 1 };
export default function stairCountRecursive(n, i = 2) {
  if (n <= 1) return memo[i - 1];

  memo[i] = memo[i - 1] + memo[i - 2];
  return stairCountRecursive(n - 1, (i += 1));
}
