const themeController = () => {
  const html = document.querySelector("html");
  const themeToggleBtn = document.querySelector(".theme-controller");

  if (!html || !themeToggleBtn) return;

  // Lees opgeslagen theme
  const savedTheme = localStorage.getItem("theme");

  // ✅ Standaard beginnen in light mode
  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // Toggle bij klikken
  themeToggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");

    const currentMode = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentMode);
  });
};

export default themeController;
