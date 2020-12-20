var tC = 23.2;
alert (countTemperature(tC));

function countTemperature(tC) {
  return ((9 / 5) * tC + 32).toFixed(1);
}