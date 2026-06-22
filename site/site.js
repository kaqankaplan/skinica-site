const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.dataset.open !== "true";
    links.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
  });
}
