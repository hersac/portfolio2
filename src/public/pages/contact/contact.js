
fetch("components/contactModal/contactModal.html")
    .then(response=>{response.text()})
    .then(data=>{

        const carouselComponent = document.getElementById("contactModal");
        carouselComponent.innerHTML = data;

        const carouselCSS = document.createElement('link');
        carouselCSS.rel = "stylesheet";
        carouselCSS.type = "text/css";
        carouselCSS.href = "components/contactModal/contactModal.css";
        document.head.appendChild(carouselCSS);

        const headerJS = document.createElement('script');
        headerJS.src = "components/contactModal/contactModal.js";
        document.body.appendChild(headerJS);

    });


const btnCurriculum = document.getElementById('btnCurriculum');
btnCurriculum.addEventListener("click", () => {
    let pdfUrl = btnCurriculum.getAttribute("cvData");
    window.open(pdfUrl, "_blank");
});

// |-- Fade Deal Effect --|

function fadeDealEffect() {
    const iconContent = document.querySelectorAll(".iconContent");

    const windowHeight = window.innerHeight;
    const movePoint = window.scrollY;
    const activePoint = (windowHeight * 4) - (windowHeight / 2);
    let num = 1;
    const pIcon = 500;

    iconContent.forEach(icon => {
        if (movePoint > activePoint) {
            icon.style.transform = `translateX(0%)`;
            icon.style.transform = `translateY(0%)`;
            icon.style.opacity = 1;
            icon.style.transition = `all ${num}s`;
            num = num + 1;
        } else if (movePoint < activePoint) {
            icon.style.transform = `translateX(-${pIcon}%)`;
            icon.style.transform = `translateY(${pIcon}%)`;
            icon.style.opacity = 0;
            icon.style.transition = `all ${num}s`;
        }
    });
};

fadeDealEffect();

window.addEventListener("scroll", fadeDealEffect);

// |--             --|