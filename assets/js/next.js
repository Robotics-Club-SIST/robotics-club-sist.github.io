const frameBtn = document.querySelector("#contactbutton");
const frameSelection = document.querySelector(".btn-frame");
const toggleFrame = function () {
  frameSelection.classList.toggle("hiddeniframe");
};
frameBtn.addEventListener("click", toggleFrame);