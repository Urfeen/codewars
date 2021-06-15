function restaurant(a, b, t) {
  return t.reduce((r, c, i) => (
    c - 1 ? (r[2].length < b ? r[2].push(2) : r[0] += 2) :
      (r[1] < a ? ++r[1] : r[2].length < b ? r[2].push(1) : (i = r[2].indexOf(1)) != -1 ? ++r[2][i] : ++r[0]),
    r
  ), [0, 0, []])[0];
}