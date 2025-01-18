// Toggle menu visibility for small screens
document.querySelector(".hamburger").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("hidden");
});

// Display current year and last modified date in footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
