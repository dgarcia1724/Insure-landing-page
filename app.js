const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const sideMenu = document.querySelector(".sideMenu");

hamburger.addEventListener("click", function () {
  sideMenu.style.left = "0";
  hamburger.style.display = "none";

  close.style.display = "block";
});

close.addEventListener("click", function () {
  sideMenu.style.left = "100%";
  close.style.display = "none";

  hamburger.style.display = "block";
});
