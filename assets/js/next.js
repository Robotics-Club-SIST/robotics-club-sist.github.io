const frameBtn = document.querySelector("#contactbutton");
const frameSelection = document.querySelector(".btn-frame");
const toggleFrame = function () {
  frameSelection.classList.toggle("hiddeniframe");
};
frameBtn.addEventListener("click", toggleFrame);
// console.log(frameBtn);

// const
// // console.log(frameBtn);
// const frame = function () {
//     frameBtn.classList.toggle('hiddeniframe');

// };

const navBtn = document.querySelector(".bi");
const overlay = document.querySelector(".overlay");
const navBar = document.querySelector(".navbar");

// console.log(navBtn);

const navFunction = function () {
  overlay.classList.toggle("hidden");
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

const navLink = document.querySelector(".nav-link");
console.log(navLink);

const handBurggerShowForever = function () {
  document.querySelector("mobile-nav-toggle").classList.add("bi-list");
};
navLink.addEventListener("click", handBurggerShowForever);
