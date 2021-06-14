function litres(time) {
  const LITRES_PER_HOUR = 0.5;
  return Math.floor(time * LITRES_PER_HOUR);
}