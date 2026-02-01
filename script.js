const scrollContainer = document.querySelector(".horizontal-scroll");
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;

});



