function pyramid(balls) {
  let a = 0;
  let i = 0;
  while (a + (i + 1) <= balls) {
    i++;
    a += i;
  }
  return i;
}