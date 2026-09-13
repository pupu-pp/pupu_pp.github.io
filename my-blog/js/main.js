/* ========== 深色模式切换（记忆到 localStorage） ========== */
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  if (toggleBtn) toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// 初始化：优先读取本地偏好，其次跟随系统
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

/* ========== 首页文章搜索过滤 ========== */
const searchInput = document.getElementById("search-input");
const postCards = document.querySelectorAll(".post-card");
const noResult = document.getElementById("no-result");

if (searchInput && postCards.length) {
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    let visible = 0;

    postCards.forEach((card) => {
      const hay = (
        card.dataset.title + " " + card.dataset.tags
      ).toLowerCase();
      const show = !q || hay.includes(q);
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    if (noResult) noResult.hidden = visible > 0;
  });
}
