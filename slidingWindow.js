const max_sub_array_of_size_k = function(k, arr) {
  let result = 0,
      windowSum = 0,
      windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    if(windowEnd >= k-1){
      result = Math.max(result, windowSum)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }

  return result
};
