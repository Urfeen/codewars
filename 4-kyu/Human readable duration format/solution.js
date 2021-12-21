function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  const timeUnitsArr = [
    ['year', 31536000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ];

  const result = timeUnitsArr.reduce((acc, [timeUnit, durr]) => {
    let unitDur = 0;

    if (seconds < dur) return acc;

    while ((seconds % dur) !== seconds) {
      unitDur++;
      seconds = seconds - dur;
    }

    return acc.concat([unitDur + ` ${timeUnit}${unitDur > 1 ? 's' : ''}`]);
  }, []);

  if (result.length === 1) return result.join(' ');
  return result.slice(0, -1).join(", ") + ' and ' + result.slice(-1);
}