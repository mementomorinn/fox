const body = document.body;
const overlay = document.querySelector(".overlay");

//rules
const modalRules = document.getElementById("modal-rules");
const openRules = document.getElementById("open-modal-rules");
const closeRules = document.getElementById("close-modal-rules");
openRules.addEventListener("click", function () {
  modalRules.classList.add("open");
  body.style.overflow = "hidden";
  overlay.classList.add("open");
});
closeRules.addEventListener("click", function () {
  modalRules.classList.remove("open");
  body.style.overflow = "visible";
  overlay.classList.remove("open");
});

//settings
const modalSett = document.getElementById("modal-settings");
const openSett = document.getElementById("open-modal-settings");
const closeSett = document.getElementById("close-modal-settings");
openSett.addEventListener("click", function () {
  modalSett.classList.add("open");
  body.style.overflow = "hidden";
  overlay.classList.add("open");
  //сброс настроек, если не нажата кнопка save
  timerOnOff(!finalTimer);
  checkCellOnOff(!finalCheckCell);
});
closeSett.addEventListener("click", function () {
  modalSett.classList.remove("open");
  body.style.overflow = "visible";
  overlay.classList.remove("open");
  //сброс настроек, если не нажата кнопка save
  foxNum = MaxFoxNum;
});

//confirm
const modalConf = document.getElementById("modal-confirm");
const openConf = document.getElementById("open-modal-confirm");
const closeConf = document.getElementById("close-modal-confirm");
openConf.addEventListener("click", function () {
  modalConf.classList.add("open");
  body.style.overflow = "hidden";
  overlay.classList.add("open");
});
closeConf.addEventListener("click", closeConfirm);
function closeConfirm() {
  modalConf.classList.remove("open");
  body.style.overflow = "visible";
  overlay.classList.remove("open");
}

//home
const home = document.getElementById("home");
home.addEventListener("click", function () {
  closeConfirm();
  container.style.display = "none";
  begin.style.display = "block";
});
