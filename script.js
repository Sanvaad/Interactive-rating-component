"use-strict";

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".sign-up").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
});
