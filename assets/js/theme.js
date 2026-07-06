(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
  }

  const button = document.getElementById("theme-toggle");

  if (button) {
    button.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", current);
      localStorage.setItem("theme", current);
    });
  }
})();
