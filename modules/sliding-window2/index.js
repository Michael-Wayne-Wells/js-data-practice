const longest_substring_with_k_distinct = function (str, k) {
  let longest = 0;
  while (str.length >= 1) {
    let charFrequency = {},
      tempLongest = 0;
    for (let i = 0; i < str.length; i++) {
      let rightChar = str[i];
      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      if (Object.keys(charFrequency).length > k) break;
      charFrequency[rightChar] += 1;
    }
    str = str.slice(1);
    tempLongest = Object.values(charFrequency).reduce((a, b) => a + b);
    if (tempLongest > longest) longest = tempLongest;
  }
  return longest;
};
