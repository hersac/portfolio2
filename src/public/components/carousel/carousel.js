// Call Carousel

fetch("components/carousel/carousel.html")
  .then((response) => response.text())
  .then((data) => {
    const carouselComponent = document.getElementById("carouselComponent");

    carouselComponent.innerHTML = data;

    // CAROUSEL CONFIG

    function cloneAndAppendLogosSlide() {
      const logosSlide = document.querySelector('.logosSlide');
      const clone = logosSlide.cloneNode(true);
      document.querySelector('.logos').appendChild(clone);
    }
    
    const logos = document.querySelector('.logos');
  
    logos.addEventListener('animationiteration', () => {
      cloneAndAppendLogosSlide();
    });
  
    cloneAndAppendLogosSlide();

  });

