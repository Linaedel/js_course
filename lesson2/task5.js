var a = 5;
var b = 2;

document.write(sum(a,b) + "<br>");
document.write(distract(a,b) + "<br>");
document.write(multiply(a,b) + "<br>");
document.write(divide(a,b) + "<br>");

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