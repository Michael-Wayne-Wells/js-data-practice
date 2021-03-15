function incrementString(strng) {
  if (!strng.match(/\d+|\d{1}/)) return strng + "1";
  let splitString = strng.split(/(\d+)/);
  let newCount = (parseInt(splitString[1]) + 1).toString();
  if (splitString[1].length > newCount.length) {
    newCount = "0".repeat(splitString[1].length - newCount.length) + newCount;
  }
  splitString[1] = newCount;
  return splitString.join("");
}
