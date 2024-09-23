//rules
const modalRules = document.getElementById("modal-rules");
const openRules = document.getElementById("open-modal-rules");
const closeRules = document.getElementById("close-modal-rules");
openRules.addEventListener("click", function () {
  modalRules.classList.add("open");
});
closeRules.addEventListener("click", function () {
  modalRules.classList.remove("open");
});
//settings
const modalSett = document.getElementById("modal-settings");
const openSett = document.getElementById("open-modal-settings");
const closeSett = document.getElementById("close-modal-settings");
openSett.addEventListener("click", function () {
  modalSett.classList.add("open");
});
closeSett.addEventListener("click", function () {
  modalSett.classList.remove("open");
});
