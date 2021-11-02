function coinChange(coins, amount, memo = [0], count = 0) {
  if (count > amount) return memo[count - 1];

  count = memo.length;
  memo[count] = amount;

  for (let coin of coins) {
    if (count - coin >= 0) {
      memo[count] = Math.min(memo[count], memo[count - coin] + 1);
    }
  }
  return coinChange(coins, amount, memo, count);
}

export default coinChange;
