var i = 1;

while (i <= 100) {
  let isSimple = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      isSimple = false;
      break;
    }
  }
  if (isSimple) {
    document.write(i + "<br>")
  }
  i++;
}