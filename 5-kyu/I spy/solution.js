function spyOn(func) {
  let callVals = [];
  const returnVals = [];
  let callCount = 0;
  function spy() {
    const arg = arguments;
    callCount += 1;
    callVals = [].concat.apply(callVals, arg);
    const val = func.apply(this, arg); returnVals.push(val); return val;
  }
  spy.callCount = () => callCount;
  spy.wasCalledWith = (val) => callVals.indexOf(val) > -1;
  spy.returned = (val) => returnVals.indexOf(val) > -1;
  return spy;
}