// Call Carousel

fetch("components/carousel.html")
  .then((response) => response.text())
  .then((data) => {
    const carouselComponent = document.getElementById("carouselComponent");

    carouselComponent.innerHTML = data;

    // CAROUSEL CONFIG

    const carouselSlides = document.querySelectorAll('.carouselSlide');
    const duration = 1000;
    let currentIndex = 0;

    function next() {
      currentIndex = currentIndex + 1;
      updateCarousel(currentIndex, carouselSlides);
    }

    function updateCarousel(index, slides) {
      const distance = 100;
      slides.forEach((slide, slideIndex) => {
        slide.style.transition = 'transform 0.5s ease';
        slide.style.transform = `translateX(${distance * (slideIndex - index)}%)`;
      });
      removeSlidesOutOfView();
    }

    function removeSlidesOutOfView() {
      const carouselSlides = document.querySelectorAll('.carouselSlide');
      const carouselWidth = carouselSlides[0].offsetWidth;
    
      carouselSlides.forEach((slide) => {
        if (slide.offsetLeft < -carouselWidth) {
          slide.remove();
        }
      });
    }

    function resetTransition() {
      carouselSlides.forEach((slide) => {
        slide.style.transition = 'none';
      });
    }

    setInterval(() => {
      resetTransition();
      next();
    }, duration);

  });