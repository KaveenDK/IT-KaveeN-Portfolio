console.log("script.js is Loaded.....");

const nightModeToggle = document.querySelector(".night-mode-toggle");
const body = document.body;

// Night mode toggle functionality
nightModeToggle.addEventListener("click", () => {
  body.classList.toggle("night-mode");
  console.log("Night mode toggled:", body.classList.contains("night-mode") ? "ON" : "OFF");
});