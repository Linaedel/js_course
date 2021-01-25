let x = new SplittedNumber(+prompt("Введите число от 0 до 999"));
console.log(x.hundreds + ' ' + x.tens + ' ' + x.ones);

function SplittedNumber(value) {
  let splittedNumber = {}
  if (isNaN(value) || value < 0 || value > 999) {
    console.log("Число имеет неверный формат");
    return splittedNumber;
  } else {
    splittedNumber.ones = value % 10;
    value = Math.floor(value/10);
    splittedNumber.tens = value % 10;
    value = Math.floor(value/10);
    splittedNumber.hundreds = value % 10;
    return splittedNumber;
  }
}