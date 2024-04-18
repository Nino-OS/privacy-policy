if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-theme");
  document.querySelector(".theme-toggle").classList.add("active");
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeToggle.classList.remove("active");
    localStorage.setItem("darkMode", "disabled");
  } else {
    body.classList.add("dark-theme");
    themeToggle.classList.add("active");
    localStorage.setItem("darkMode", "enabled");
  }
}

if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

function toggleTheme() {
  if (localStorage.getItem("darkMode") === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  document.querySelector(".theme-toggle").classList.add("active");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  document.querySelector(".theme-toggle").classList.remove("active");
  localStorage.setItem("darkMode", "disabled");
}

function redirectToMainSite() {
  window.location.href = "https://Nino-OS.github.io/";
}
