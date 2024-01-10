"use strict"

const buttons = document.querySelectorAll(".slider-controls button");
const slides = document.querySelectorAll(".slide-item");
let image = document.querySelector(".slider_images");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("slider-btn-active");
      slides[j].classList.remove("slide-active");
      image.classList.remove("slider_image-" + j);
    }
    buttons[i].classList.add("slider-btn-active");
    slides[i].classList.add("slide-active");
    image.classList.add("slider_image-" + i);
  });
}

