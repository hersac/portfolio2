//Call Carousel

fetch("components/carousel.html")
  .then((response) => response.text())
  .then((data) => {
    const carouselComponent = document.getElementById("carouselComponent");

    carouselComponent.innerHTML = data;

    //CAROUSEL CONFIG
    const carouselContainer = document.getElementsByClassName('carouselContainer');
    const carouselSlide = document.getElementsByClassName('carouselSlide');
    const duration = 3000;
    const currentIndex = 0;

    function updateCarousel(){
      const hidde = -currentIndex * 100;
      //carouselSlide.style.transform = `translateX(${hidde})`;
      carouselSlide.style.background = "lightcoral";
    }

    setTimeout(updateCarousel, duration);

  });
