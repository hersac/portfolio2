fetch("components/carousel/carousel.html")
    .then(response=>{response.text()})
    .then(data=>{

        const carouselComponent = document.getElementById("carouselComponent");
        carouselComponent.innerHTML = data;

        const carouselCSS = document.createElement('link');
        carouselCSS.rel = "stylesheet";
        carouselCSS.type = "text/css";
        carouselCSS.href = "components/carousel/carousel.css";
        document.head.appendChild(carouselCSS);

        const headerJS = document.createElement('script');
        headerJS.src = "components/carousel/carousel.js";
        document.body.appendChild(headerJS);

    });

