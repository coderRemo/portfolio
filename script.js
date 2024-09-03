"use strict;";

// Set current year
const yearCopy = document.querySelector(".year");
const currentYear = new Date().getFullYear();
// console.log(currentYear);
yearCopy.textContent = currentYear;

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
