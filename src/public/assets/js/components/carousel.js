//Call Carousel

fetch("components/carousel.html")
  .then((response) => response.text())
  .then((data) => {
    const carouselComponent = document.getElementById("carouselComponent");

    carouselComponent.innerHTML = data;

    //CAROUSEL CONFIG
    const carouselContainer = document.getElementsByClassName('carouselContainer');
    const carouselSlide = document.querySelector('.carouselSlide');
    const totalSlides = document.querySelectorAll('.carouselSlide').length; //verificar
    
    const duration = 3000;
    let currentIndex = 0;

    function next(){
      currentIndex = (currentIndex + 1) % totalSlides; //VErificar
      updateCarousel(currentIndex);
    }

    function updateCarousel(index){
      const hidde = -index * 100;
      carouselSlide.style.transform = `translateX(${hidde}%)`;
    }

    setTimeout(next, duration);

  });
