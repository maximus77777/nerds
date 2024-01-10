const link = document.querySelector(".contacts .btn");
const close = document.querySelector(".close");
const popup = document.querySelector(".modal");
const login = popup.querySelector("[name=login]");
const email = popup.querySelector("[name=email]");
const textarea = popup.querySelector("[name=text-email]");
const form = popup.querySelector("form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (login.value && !email.value) {
    email.focus();
  } else if (login.value && email.value) {
    textarea.focus();
  } else {
    login.focus();
}
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {

  if(!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("login", email.value);
      localStorage.setItem("login", textarea.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

