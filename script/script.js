// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
const text = document.querySelectorAll(".nav-link");
const brandName = document.querySelector(".navbar-brand");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    for (let index = 0; index < text.length; index++) {
      text[index].classList.add("text-changed");
    }
    brandName.classList.add("text-changed");
  } else {
    header.classList.remove("navbarDark");
    for (let index = 0; index < text.length; index++) {
      text[index].classList.remove("text-changed");
    }
    brandName.classList.remove("text-changed");
  }
};
