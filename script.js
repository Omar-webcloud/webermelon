const scrollContainer = document.querySelector(".horizontal-scroll");
if (scrollContainer) {
  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  });
}

const toggler = document.querySelector(".nav-toggler");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".menu-overlay");

function toggleMenu() {
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

if (toggler) {
  toggler.addEventListener("click", toggleMenu);
}
if (closeBtn) {
  closeBtn.addEventListener("click", toggleMenu);
}
if (overlay) {
  overlay.addEventListener("click", toggleMenu);
}

const tabs = document.querySelectorAll(".collection-tag p");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
   
    tabs.forEach((t) => t.classList.remove("active"));
    
    tab.classList.add("active");
  });
});
