//Call Carousel

fetch("components/carousel.html")
    .then(response => response.text())
    .then(data => {
        const carouselComponent = document.getElementById('carouselComponent');
        carouselComponent.innerHTML = data;
    });
