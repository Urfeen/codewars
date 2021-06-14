String.prototype.sixBitNumber = function () {
  return /^([1-5]?\d|6[0-3])$/g.test(this);
};