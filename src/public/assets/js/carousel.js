const carousel = document.querySelector(".carousel-inner");
let currentIndex = 0;

function moveToNextSlide(){
    currentIndex = (currentIndex + 1) % carousel.children.length;
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(moveToNextSlide, 3000);