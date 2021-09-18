function nextSmaller(n) {
  let nArray = n.toString().split("")
  const length = nArray.length;
  const minimumNum = 1 + Array(length).join('0')
  for (let i = n - 1; i >= minimumNum; i--) {
    const newNumArray = i.toString().split('');
    let counter = 0;
    for (let j = 0; j < newNumArray.length; j++) {
      if (nArray.indexOf(newNumArray[j]) < 0)
        break;
      counter++
      nArray.splice(nArray.indexOf(newNumArray[j]), 1)
      if (counter === length) {
        return i;
      }
    }
    nArray = n.toString().split("");
  }
  return -1;
}
