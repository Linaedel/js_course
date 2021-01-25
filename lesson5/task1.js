function printBoard() {
  let boardContainer = document.querySelector('#chess');
  let board = document.createElement('table');
  board.cellSpacing = '0px';
  for (let i = 0; i < 9; i++) {
    let row = document.createElement('tr');
    row.verticalAlign = 'center';
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement('td');
      cell.width = '30px';
      cell.height = '30px';
      cell.align = 'center';
      cell.textContent = setMarkup(i,j);
      if (i > 0 && j > 0) {
        cell.style.border = '1px solid black';
        if (i%2 != 0 && j%2 != 0 || i%2 == 0 && j%2 == 0) {
          white = false;
          cell.style.backgroundColor = 'white';
        } else {
          white = true;
          cell.style.backgroundColor = 'black';
        }
      }
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
  boardContainer.appendChild(board);
}

function setMarkup(i, j) {
  if (i == 0 && j != 0) {
    switch (j) {
      case 1: return "A"; break;
      case 2: return "B"; break;
      case 3: return "C"; break;
      case 4: return "D"; break;
      case 5: return "E"; break;
      case 6: return "F"; break;
      case 7: return "J"; break;
      case 8: return "H"; break;
    }
  } else if (j == 0 && i != 0) {
    switch (i) {
      case 1: return "1"; break;
      case 2: return "2"; break;
      case 3: return "3"; break;
      case 4: return "4"; break;
      case 5: return "5"; break;
      case 6: return "6"; break;
      case 7: return "7"; break;
      case 8: return "8"; break;
    }
  } else {
    return ' ';
  }
}

printBoard();
