const root = document.documentElement;
const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const navToggle = document.querySelector("#nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const header = document.querySelector("#site-header");
const panelImage = document.querySelector("#panel-image");
const metaThemeLight = document.querySelector("#meta-theme-light");
const metaThemeDark = document.querySelector("#meta-theme-dark");

const labels = {
  zh: { title: "aPaste 功能 — macOS 剪贴板历史、Pinboard 与批量粘贴", language: "Switch to English", theme: "切换外观", menuOpen: "打开菜单", menuClose: "关闭菜单" },
  en: { title: "aPaste features — clipboard history, Pinboards, and batch pasting", language: "切换为中文", theme: "Toggle appearance", menuOpen: "Open menu", menuClose: "Close menu" }
};

let language = read("apaste-language") || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

function read(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function save(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Safari 隐私模式下写入会抛错，忽略即可 */ }
}

function applyLanguage(next) {
  language = next;
  root.lang = next === "zh" ? "zh-CN" : "en";
  document.title = labels[next].title;
  document.querySelectorAll("[data-zh]").forEach((element) => {
    const value = element.dataset[next];
    if (value) element.textContent = value;
  });
  languageToggle.textContent = next === "zh" ? "EN" : "中";
  languageToggle.setAttribute("aria-label", labels[next].language);
  themeToggle.setAttribute("aria-label", labels[next].theme);
  updateNavToggleLabel();
  save("apaste-language", next);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (panelImage) {
    const next = theme === "light" ? panelImage.dataset.srcLight : panelImage.dataset.srcDark;
    if (next && panelImage.getAttribute("src") !== next) panelImage.src = next;
  }
  if (metaThemeLight) metaThemeLight.setAttribute("media", theme === "light" ? "all" : "not all");
  if (metaThemeDark) metaThemeDark.setAttribute("media", theme === "dark" ? "all" : "not all");
}

function updateNavToggleLabel() {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-label", isOpen ? labels[language].menuClose : labels[language].menuOpen);
}

function setMobileNav(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
  mobileNav.hidden = !open;
  updateNavToggleLabel();
}

languageToggle.addEventListener("click", () => applyLanguage(language === "zh" ? "en" : "zh"));

themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  save("apaste-theme", next);
});

navToggle.addEventListener("click", () => setMobileNav(navToggle.getAttribute("aria-expanded") !== "true"));
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMobileNav(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setMobileNav(false);
    navToggle.focus();
  }
});

matchMedia("(min-width: 981px)").addEventListener("change", (event) => {
  if (event.matches) setMobileNav(false);
});

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealElements = [...document.querySelectorAll(".reveal")];
if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return;
      entry.target.classList.add("visible");
      self.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.1 });
  revealElements.forEach((element) => observer.observe(element));
}

applyLanguage(language);
applyTheme(root.dataset.theme === "light" ? "light" : "dark");
