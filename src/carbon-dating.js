

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (typeof (sampleActivity) != "string" || isNaN(Number(sampleActivity)) || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
}
