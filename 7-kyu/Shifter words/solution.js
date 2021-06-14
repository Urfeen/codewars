function shifter(s) {
  const shiftableLetters = ["H", "I", "N", "O", "S", "X", "Z", "W", "M"];
  if (!s) return 0;
  return [...new Set(s.split(" "))].reduce((acc, cur) => {
    return cur.split("").every(el => {
      return shiftableLetters.includes(el);
    }) ? acc + 1 : acc;
  }, 0)
}