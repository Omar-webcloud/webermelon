// scroll

const scrollContainer = document.querySelector(".horizontal-scroll");

if (scrollContainer) {
  scrollContainer.addEventListener("wheel", (event) => {
    const atStart = scrollContainer.scrollLeft === 0;
    const atEnd =
      scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth;

    if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
      return;
    }

    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  }, { passive: false });
}

// infinite slide

const swiper = new Swiper(".horizontal-scroll", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  speed: 600,
  freeMode: true,
  mousewheel: {
    forceToAxis: true
  },
  navigation: {
    nextEl: ".rightClick",
    prevEl: ".leftClick"
  },
  breakpoints: {
    
    200: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
  
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    }}
});




//menu

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

// product filter

const tags = document.querySelectorAll(".collection-tag p");
const products = document.querySelectorAll(".product-card");
const seeAllBtn = document.getElementById("see-all-btn");

if (seeAllBtn) {
  seeAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    products.forEach((product) => {
      product.style.display = "block";
    });
    tags.forEach((t) => t.classList.remove("active"));
  });
}

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    tags.forEach((t) => t.classList.remove("active"));
    tag.classList.add("active");

    const category = tag.textContent.toLowerCase();

    products.forEach((product) => {
      const imgSrc = product.querySelector("img").src.toLowerCase();
      if (imgSrc.includes(category) || category === "all") {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});



// count

window.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat h3");

  const animateCount = (stat) => {
    const target = parseInt(stat.innerText);
    const load = stat.innerText.replace(/[0-9]/g, "");
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const animate = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const currentValue = Math.round(target * progress);

      stat.innerText = currentValue + load;

      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        stat.innerText = target + load;
      }
    };

    animate();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );

  stats.forEach((stat) => {
    observer.observe(stat);
  });
});
