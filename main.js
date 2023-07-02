// Description: Main JS file for the project

const toggleBtn = document.querySelector(".switch");
const input = document.querySelector(".switch input");

toggleBtn.addEventListener("input", updateTheme);

function updateTheme(event) {
  const darkMode = event.target.checked;

  document.documentElement.classList.toggle("dark", darkMode);
  document.documentElement.classList.toggle("light", !darkMode);
  localStorage.setItem("darkMode", darkMode);
}

document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");

  input.checked = darkMode === "true";
  updateTheme({ target: { checked: input.checked } });
});
