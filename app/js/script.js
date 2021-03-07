//TODO: change button text and color gradient when switching from light/dark modes
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");

hamburgerBtn.addEventListener("click", function () {
  console.log("Hamburger open");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
