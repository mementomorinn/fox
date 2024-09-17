//rules
const modalRules = document.getElementById("modal-rules");
const openRules = document.getElementById("open-modal-rules");
const closeRules = document.getElementById("close-modal-rules");

openRules.addEventListener("click", function () {
  modalRules.style.display = "block";
  modalRules.style.transition = "0.3s";
});

closeRules.addEventListener("click", function () {
  modalRules.style.display = "none";
});

//settings
const modalSett = document.getElementById("modal-settings");
const openSett = document.getElementById("open-modal-settings");
const closeSett = document.getElementById("close-modal-settings");

openSett.addEventListener("click", function () {
  modalSett.style.display = "block";
});

closeSett.addEventListener("click", function () {
  modalSett.style.display = "none";
});
