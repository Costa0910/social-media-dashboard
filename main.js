const toggleBtn = document.querySelector(".switch");

// Listen for a click on the button
toggleBtn.addEventListener("input", updateTheme);

// Update the theme
function updateTheme(event) {
  if (event.target.checked) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
}