var a = 5;
var b = 2;

document.write(mathOperation(a,b,'distract'));

function mathOperation(arg1, arg2, operation) {
  let result;
  switch (operation) {
    case 'sum':
      result = sum(arg1, arg2);
      break;
    case 'distract':
      result = distract(arg1, arg2);
      break;
    case 'multiply':
      result = multiply(arg1, arg2);
      break;
    case 'divide':
      result = divide(arg1, arg2);
      break;
  }
  return result;
}

function sum (a, b) {
  return a + b;
}

function distract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}