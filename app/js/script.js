//TODO: change button text and color gradient when switching from light/dark modes
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");
const slideInMenu = document.querySelector(".header__mobile-menu");

hamburgerBtn.addEventListener("click", function () {
  console.log("Hamburger open");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    slideInMenu.classList.remove("active");
  } else {
    header.classList.add("open");
    slideInMenu.classList.add("active");
  }
});

//TODO: add scroll transition
function scrollHome() {
  window.scrollTo(0, 0);
}
