(function () {
  const root = document.documentElement;
  const storageKey = "theme";

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  const savedTheme = localStorage.getItem(storageKey);
  applyTheme(savedTheme || getSystemTheme());

  window.toggleTheme = function () {
    const current = root.getAttribute("data-theme") || getSystemTheme();
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  };
})();
