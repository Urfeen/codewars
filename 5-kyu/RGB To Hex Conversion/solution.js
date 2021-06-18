function rgb(...rgb) {
  return rgb.map(num => num < 0 ? 0 : num > 255 ? 255 : num).reduce((acc, curr) => {
    const hexCurr = curr.toString(16).toUpperCase();
    return acc.concat(`${hexCurr.length === 1 ? '0' + hexCurr : hexCurr}`);
  }, '');
}