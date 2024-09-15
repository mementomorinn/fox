//переменные
const playfield = document.querySelector(".playfield");
playfield.addEventListener("click", marking);
//разметка
function marking() {
  let flag = true;
  if (flag) {
    for (let i = 9; i >= 0; i--) {
      for (let j = 9; j >= 0; j--) {
        playfield.insertAdjacentHTML(
          "afterbegin",
          `<div class="block x${i} y${j}"></div>`
        );
      }
    }
    flag = false;
  }
}
//отслеживаем, по какому элементу был совершен клик
playfield.addEventListener("click", click);
function click(event) {
  console.log(event.target);
}
