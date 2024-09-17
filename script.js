//переменные
const playfield = document.querySelector(".playfield");
const start = document.getElementById("btn-start");
let countFox;
let cell;
let cellExclusion;
let openFox = 0;
let foxNumber = 0;
let nearFox = 0;
let rx = 0;
let ry = 0;
let arrFox = new Array(); //массив с лисами
let arrCell = new Array(); //массив с открытыми клетками
let isCheckCellTrue = true;

//начало игры
start.addEventListener("click", function () {
  openFox = 0;
  foxNumber = 0;
  marking();
  cleaning(arrFox);
  cleaning(arrCell);
  fox(10);
  console.log(arrFox);
  start.style.display = "none";
});

//разметка
function marking() {
  playfield.innerHTML = "";

  for (let x = 9; x >= 0; x--) {
    for (let y = 9; y >= 0; y--) {
      playfield.insertAdjacentHTML(
        "afterbegin",
        `<div class="block x${y}y${x}" onclick="getXY(this.getAttribute('class'))"></div>`
      );
    }
  }
}

//очистка массива
function cleaning(arr) {
  for (let i = 0; i <= 9; i++) {
    arr[i] = [];
    for (let j = 9; j >= 0; j--) {
      arr[i][j] = 0;
    }
  }
}

//размещение лис
function fox(num) {
  foxNumber = 0;
  rx = 0;
  ry = 0;
  while (foxNumber < num) {
    rx = Math.floor(Math.random() * 10);
    ry = Math.floor(Math.random() * 10);
    if (arrFox[rx][ry] === 0) {
      arrFox[rx][ry] = 1;
      foxNumber++;
    }
  }
}

//событие после клика
//получение координат клетки
function getXY(className) {
  const x = +className.slice(7, 8);
  const y = +className.slice(9);
  cell = document.querySelector(`.x${x}y${y}`);
  //если есть лиса
  if (arrCell[y][x] === 0) {
    if (arrFox[y][x]) {
      openFox++;
      cell.style.background = "center / 80% no-repeat url(./img/fox.png)"; //отрисовка лис
      count(x, y);
    } else {
      //если лисы нет
      cell.style.background = "#ffffff";
      checkFox(x, y);
    }
    arrCell[y][x] = 1; //запись открытой клетки в массив
    checkWin();
  }
}
//проверка на победу
function checkWin() {
  if (foxNumber === openFox) {
    start.innerText = `поздравляем, вы нашли всех лис!!!
       нажмите, чтобы начать новую игру`;
    start.style.display = "block";
  }
}
//подсчет ближайших лис при открытии пустой клетки
function checkFox(x, y) {
  nearFox = 0;
  for (let i = 0; i <= 9; i++) {
    for (let j = 9; j >= 0; j--) {
      if (arrFox[i][j] === 1 && arrCell[i][j] === 0) {
        if (i === y || j === x || j - i === x - y || j - x === y - i) {
          nearFox += 1;
        }
      }
    }
  }
  checkCell(x, y, nearFox);
  cell.innerHTML = `<h2 class="number">${nearFox}</h2>`;
}
//изменение счетчика при открытии лисы
function count(x, y) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 9; j >= 0; j--) {
      if (arrCell[i][j] === 1 && arrFox[i][j] === 0) {
        if (i === y || j === x || j - i === x - y || j - x === y - i) {
          cell = document.querySelector(`.x${j}y${i}`);
          countFox = +cell.innerText - 1;
          checkCell(j, i, countFox);
          cell.innerHTML = `<h2 class="number">${countFox}</h2>`;
        }
      }
    }
  }
}
//подсвечивание клеток, в которых не может быть лис
function checkCell(x, y, countFox) {
  if (isCheckCellTrue) {
    if (countFox === 0) {
      for (let q = 0; q <= 9; q++) {
        for (let w = 9; w >= 0; w--) {
          if (arrCell[q][w] === 0 && arrFox[q][w] === 0) {
            if (q === y || w === x || w - q === x - y || w - x === y - q) {
              cellExclusion = document.querySelector(`.x${w}y${q}`);
              cellExclusion.style.background = "#66333357";
              arrCell[q][w] = 2;
            }
          }
        }
      }
    }
  }
}
