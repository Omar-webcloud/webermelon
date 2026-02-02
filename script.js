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


const productData = [
  {
    id: 1,
    title: "Vintage Single Sofa 2024",
    category: "Sofa",
    price: 18500,
    image: "assets/sofa_1.png"
  },
  {
    id: 2,
    title: "Modern Chair Classic",
    category: "Chair",
    price: 18000,
    image: "assets/chair_1.png"
  },
  {
    id: 3,
    title: "Comfort Wooden Chair",
    category: "Chair",
    price: 18000,
    image: "assets/chair_2.png"
  },
  {
    id: 4,
    title: "Luxury Double Sofa",
    category: "Sofa",
    price: 18000,
    image: "assets/sofa_1.png"
  },
  {
    id: 5,
    title: "Premium Sofa Set",
    category: "Sofa",
    price: 18500,
    image: "assets/sofa_1.png"
  },
  {
    id: 6,
    title: "Classic Chair 2024",
    category: "Chair",
    price: 18000,
    image: "assets/chair_1.png"
  },
  {
    id: 7,
    title: "Minimal Chair",
    category: "Chair",
    price: 18000,
    image: "assets/chair_2.png"
  },
  {
    id: 8,
    title: "Elegant Sofa",
    category: "Sofa",
    price: 18000,
    image: "assets/sofa_1.png"
  }
];

