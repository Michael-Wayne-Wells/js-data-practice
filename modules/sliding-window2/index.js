const longest_substring_with_k_distinct = function (str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let i = 0; i < k; i++) {
    let rightChar = str[i];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
  }
};
