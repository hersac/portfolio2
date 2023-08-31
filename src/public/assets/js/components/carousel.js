//Call Carousel

fetch("components/carousel.html")
  .then((response) => response.text())
  .then((data) => {
    const carouselComponent = document.getElementById("carouselComponent");

    carouselComponent.innerHTML = data;

    //CAROUSEL CONFIG
    //const carouselSlide = document.querySelector('.carouselSlide');
    const totalSlides = document.querySelectorAll('.carouselSlide').length;
    
    const duration = 3000;
    let currentIndex = 0;

    function next(){
      currentIndex = (currentIndex + 1) % totalSlides
      updateCarousel(currentIndex);
    }

    function updateCarousel(index){
      const hide = -index * 100;
      carouselSlide.style.transform = `translateX(${hide}%)`;
    }

    setTimeout(next, duration);

  });
