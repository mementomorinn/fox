//setting
const btnTimer = document.getElementById("timer");
const btnCheckCell = document.getElementById("check-cell");
let isTimer = 1;
let isCheckCell = 0;

//включение кнопки
function turnOn(btn) {
  const parent = btn.parentElement;
  parent.classList.add("on");
}
//выключение кнопки
function turnOff(btn) {
  const parent = btn.parentElement;
  parent.classList.remove("on");
}
//тык на кнопку
btnTimer.addEventListener("click", function (e) {
  if (isTimer) {
    turnOff(e.target);
    isTimer = 0;
  } else {
    turnOn(e.target);
    isTimer = 1;
  }
});

btnCheckCell.addEventListener("click", function (e) {
  if (isCheckCell) {
    turnOff(e.target);
    isCheckCell = 0;
    console.log(isCheckCell);
  } else {
    turnOn(e.target);
    isCheckCell = 1;
    console.log(isCheckCell);
  }
});
