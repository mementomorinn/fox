//setting
const btnTimer = document.getElementById("timer");
const btnCheckCell = document.getElementById("check-cell");
const settTimer = btnTimer.parentElement;
const settCheck = btnCheckCell.parentElement;
let isTimer = 1;
let isCheckCell = 0;

//включение кнопки
// function turnOn(btn) {
//   settTimer.classList.add("on");
// }
// //выключение кнопки
// function turnOff(btn) {
//   settCheck.classList.remove("on");
// }
//тык на кнопку
btnTimer.addEventListener("click", function (e) {
  if (isTimer) {
    settTimer.classList.remove("on");
    isTimer = 0;
  } else {
    settTimer.classList.add("on");
    isTimer = 1;
  }
  console.log(isTimer);
});

btnCheckCell.addEventListener("click", function (e) {
  if (isCheckCell) {
    settCheck.classList.remove("on");
    isCheckCell = 0;
    console.log(isCheckCell);
  } else {
    settCheck.classList.add("on");
    isCheckCell = 1;
    console.log(isCheckCell);
  }
});
