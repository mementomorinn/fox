//setting
const save = document.getElementById("save");
const btnTimer = document.getElementById("timer");
const btnCheckCell = document.getElementById("check-cell");
const settTimer = btnTimer.parentElement;
const settCheck = btnCheckCell.parentElement;
let foxNum = 10;
let isCheckCell = 0;
let finalCheckCell = 0;
let isTimer = 1;
let finalTimer = 1;

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

save.addEventListener("click", function () {
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
});

//score
//изменение счетчика лис
function foxCounter(num) {
  const counter = document.getElementById("fox-counter");
  counter.innerText = `лис осталось: ${num}`;
}
//изменение счетчика ходов
function stepCounter(num) {
  const counter = document.getElementById("step-counter");
  counter.innerText = `ходов сделано: ${num}`;
}
