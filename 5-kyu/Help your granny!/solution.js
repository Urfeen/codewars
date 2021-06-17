function tour(friends, fTowns, distTable) {
  let result = 0;
  const fTownsObg = Object.fromEntries(fTowns);

  friends.reduce((prevMilesToFriend, friend, index) => {
    if (!fTownsObg[friend]) {
      result += prevMilesToFriend;
      return 0;
    }

    const currMilesToFriend = distTable[distTable.indexOf(fTownsObg[friend]) + 1];
    if (prevMilesToFriend !== 0) result += pythagorean(prevMilesToFriend, currMilesToFriend);
    else result += currMilesToFriend;

    if (!friends[index + 1]) {
      result += currMilesToFriend;
      return 0;
    }

    return currMilesToFriend;
  }, 0)

  function pythagorean(a, b) {
    return Math.sqrt(Math.pow(Math.max(a, b), 2) - Math.pow(Math.min(a, b), 2));
  }

  return Math.floor(result);
}