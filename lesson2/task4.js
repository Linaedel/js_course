var a = 5;

switch (a) {
  case 0: logIfMore(0, a);
  case 1: logIfMore(1, a);
  case 2: logIfMore(2, a);
  case 3: logIfMore(3, a);
  case 4: logIfMore(4, a);
  case 5: logIfMore(5, a);
  case 6: logIfMore(6, a);
  case 7: logIfMore(7, a);
  case 8: logIfMore(8, a);
  case 9: logIfMore(9, a);
  case 10: logIfMore(10, a);
  case 11: logIfMore(11, a);
  case 12: logIfMore(12, a);
  case 13: logIfMore(13, a);
  case 14: logIfMore(14, a);
  case 15: logIfMore(15, a);
}

function logIfMore(x, a) {
  if (a <= x) {
     document.write(x + "<br>");
  }
}