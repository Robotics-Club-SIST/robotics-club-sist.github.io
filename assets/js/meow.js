const navBtn = document.querySelector(".bi");
const overlay = document.querySelector(".overlay");
const navBar = document.querySelector(".navbar");

// console.log(navBtn);

const navFunction = function () {
  overlay.classList.remove("hidden");
  navBtn.classList.toggle("bi-x");
  navBar.classList.toggle("navbar-mobile");
};
const navFunctionClose = function () {
  overlay.classList.toggle("hidden");
  navBtn.classList.toggle("bi-x");
  navBar.classList.toggle("navbar-mobile");
};

navBtn.addEventListener("click", navFunction);
overlay.addEventListener("click", navFunctionClose);


