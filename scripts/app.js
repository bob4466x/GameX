const menu = document.querySelector(".menu");
const navList = document.querySelector("nav ul");
console.log(menu);
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navList.classList.toggle("active");
});

// Contact
const profileButton = document.querySelector(".hire");
const closeButton = document.querySelectorAll(".close, .btn");
const popup = document.querySelector(".popup");
const section = document.querySelector("section");
profileButton.addEventListener("click", () => {
  popup.classList.add("active");
  section.classList.add("active");
});

closeButton.forEach((button) => {
  button.addEventListener("click", () => {
    popup.classList.remove("active");
    section.classList.remove("active");
  });
});

// End Contact
