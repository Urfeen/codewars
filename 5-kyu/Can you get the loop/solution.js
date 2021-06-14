function loop_size(node) {
  const loopArr = [];
  while (node && loopArr.indexOf(node) < 0) {
    loopArr.push(node);
    node = node.next;
  }
  const firstIndex = Math.max(0, loopArr.indexOf(node));
  return loopArr.length - firstIndex;
}