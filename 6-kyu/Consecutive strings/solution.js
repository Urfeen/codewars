function longestConsec(strarr, k) {
  if (k <= 0 || strarr.length === 0 || k > strarr.length) return "";
  const sortedArr = [];
  for (let i = 0; i < strarr.length; i++) {
    let tempStr = "";
    for (let j = 0; j < k; j++) {
      if (i + k > strarr.length) break;
      tempStr += strarr[i + j];
    }
    sortedArr.push(tempStr);
  }
  return sortedArr.reduceRight(function (a, b) {
    return a.length > b.length ? a : b;
  }, "");
}