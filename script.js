const scrollContainer = document.querySelector(".horizontal-scroll");
const slider = document.querySelector(".silder");

if (scrollContainer && slider) {
  let isDragging = false;
  let startX;
  let initialSliderLeft;

  const updateSliderPosition = () => {
    if (isDragging) return;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const scrollRatio = scrollContainer.scrollLeft / maxScroll;

    const containerWidth =
      document.querySelector(".product-scroll").clientWidth;
    const sliderWidth = slider.offsetWidth;
    const trackWidth = containerWidth / 4;

    
    const maxTranslate = 100; 

    const translateX = scrollRatio * maxTranslate * 2 - maxTranslate;
    slider.style.transform = `translateX(${translateX}px)`;
  };

  scrollContainer.addEventListener("scroll", updateSliderPosition);
  window.addEventListener("resize", updateSliderPosition);

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX;

    const style = window.getComputedStyle(slider);
    const matrix = new DOMMatrix(style.transform);
    initialSliderLeft = matrix.m41;

    e.preventDefault();
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      slider.style.cursor = "grab";
    }
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const maxTranslate = 100; 
    const deltaX = e.pageX - startX;
    let newTranslateX = initialSliderLeft + deltaX;

    if (newTranslateX < -maxTranslate) newTranslateX = -maxTranslate;
    if (newTranslateX > maxTranslate) newTranslateX = maxTranslate;

    slider.style.transform = `translateX(${newTranslateX}px)`;

    const ratio = (newTranslateX + maxTranslate) / (maxTranslate * 2);
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    scrollContainer.scrollLeft = ratio * maxScroll;
  });

  updateSliderPosition(); 
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

const tags = document.querySelectorAll(".collection-tag p");
const products = document.querySelectorAll(".product-card");

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

window.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat h3");

  stats.forEach((stat) => {
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
  });
});
