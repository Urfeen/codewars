const convert = (input, source, target) => {
  let dec = [...input].reduce((pre, val) => pre * source.length + source.indexOf(val), 0);
  let res = ``;
  do {
    res = target[dec % target.length] + res;
    dec = Math.floor(dec / target.length);
  } while (dec > 0);
  return res;
};