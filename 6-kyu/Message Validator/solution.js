function isAValidMessage(message) {
  if (message.length === 0) return true;
  if (isNaN(parseInt(message[0])) || parseInt(message[message.length - 1])) return false;
  let answer = true;
  message
    .split(/(\d+)/)
    .filter((e) => e !== "")
    .reduce((prev, cur) => {
      if (parseInt(prev)) {
        if (+prev !== cur.length) answer = false;
      }
      return cur;
    });
  return answer;
}