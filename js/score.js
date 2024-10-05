//setting
const btnTimer = document.getElementById("timer");
const btnCheckCell = document.getElementById("check-cell");
const settTimer = btnTimer.parentElement;
const settCheck = btnCheckCell.parentElement;
let foxNum = 10;
let isCheckCell = 0;
let finalCheckCell = 0;
let isTimer = 1;
let finalTimer = 1;
let min = 0;
let sec = 0;
let score = 0;
//слайдер
btnTimer.addEventListener("click", function (e) {
  timerOnOff(isTimer);
});

function timerOnOff(timer) {
  if (timer) {
    settTimer.classList.remove("on");
    isTimer = 0;
  } else {
    settTimer.classList.add("on");
    isTimer = 1;
  }
}
btnCheckCell.addEventListener("click", function (e) {
  checkCellOnOff(isCheckCell);
});
function checkCellOnOff(checkCell) {
  if (checkCell) {
    settCheck.classList.remove("on");
    isCheckCell = 0;
  } else {
    settCheck.classList.add("on");
    isCheckCell = 1;
  }
}

//количество лис
const text = document.getElementById("text");
const inputFox = document.getElementById("num-fox");
function checkInput() {
  foxNum = parseInt(inputFox.value);
  if (foxNum >= 1 && foxNum <= 15) {
    if (parseFloat(foxNum) === Math.floor(foxNum)) {
      text.style.display = "none";
      inputFox.style.border = "2px solid var(--color-green)";
      return 1;
    } else {
      return 0;
    }
  }
}
//ошибка при обработке числа
function error() {
  text.style.display = "block";
  inputFox.style.border = "2px solid #8f4e4e";
}
//сохранение настроек
function saveSett() {
  foxNum = parseInt(inputFox.value);
  finalTimer = isTimer;
  finalCheckCell = isCheckCell;
  if (foxNum) {
    if (checkInput()) {
      MaxFoxNum = foxNum;
    } else {
      error();
    }
  }
  // console.log(finalCheckCell, finalTimer, MaxFoxNum);
}

//score
//подсчет очков
function addPoints(arr) {
  let scoreTemp = -1;
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (arr[i][j] === 0) {
        scoreTemp++;
      }
    }
  }
  return scoreTemp;
}
//изменение счетчика лис
function foxCounter(num) {
  const counter = document.getElementById(`fox-counter-game`);
  counter.innerText = `${num}`;
}
//изменение счетчика ходов
function stepCounter(num, id) {
  const counter = document.getElementById(`step-counter-${id}`);
  counter.innerText = `${num}`;
}
//изменение счетчика очков
function scoreCounter(score, id) {
  const counter = document.getElementById(`score-${id}`);
  counter.innerText = `${score}`;
}
//изменение таймера
function updateTime(min, sec, id) {
  const timer = document.getElementById(`time-${id}`);
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  timer.innerText = `${min}:${sec}`;
}
//счет времени
function timer() {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  updateTime(min, sec, "game");
}

//отображение поля с таймером
function showTimer(finalTimer) {
  const timerFields = document.querySelector(".timer_display");
  if (finalTimer) {
    timerFields.style.display = "block";
  } else {
    timerFields.style.display = "none";
  }
}
// setInterval(timer, 1000);
