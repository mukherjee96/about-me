"use strict";

// document
//   .getElementById("collapseToggle")
//   .addEventListener("click", function (e) {
//     e.target.text.includes("Read More")
//       ? (e.target.text = "Read Less")
//       : (e.target.text = "Read More");
//   }),

// Hide the loader animation when window completes loading
window.onload = function () {
  document.getElementsByClassName("load-bar")[0].style.display = "none";
};

// Collapse the nav when visitor clicks on nav item
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
