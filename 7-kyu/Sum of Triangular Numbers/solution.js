function sumTriangularNumbers(n) {
  if (n < 0) return 0;
  let temp = 0;
  let result = 0;
  for (let row = 1; row <= n; row++) {
    temp += row;
    result += temp;
  }
  return result;
}