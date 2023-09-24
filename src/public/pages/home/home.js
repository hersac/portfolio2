const title = document.getElementsByClassName('heri1');
const homeImage = document.getElementsByClassName('homeImage');
let validator = 0;
let secondValidator = 0;

function radiance() {
    if (validator === 0) {
        title[0].style.filter = 'drop-shadow(0 0 5px var(--primary-color))';
        validator = 1;
    } else {
        title[0].style.removeProperty('filter');
        validator = 0;
    }
}

function floatImage() {
    if (validator === 0) {
        homeImage[0].style.transform = 'translateY(10%)';
        secondValidator = 1;
    } else {
        homeImage[0].style.removeProperty('transform');
        secondValidator = 0;
    }
}

setInterval(radiance, 2000);
setInterval(floatImage, 1000);



// |-- Scroll fade effect --|

const homeTitles = document.getElementById("homeTitles");
const homeHeri = document.getElementById('homeHeri');
const devTitle = document.getElementById('devTitle');

function homeOpacity() {
    const distance = window.scrollY;
    const finalP = homeTitles.offsetTop;

    if (distance > 0) {
        homeHeri.style.opacity = 0;
        homeHeri.style.transition = "all 0.2s";

        devTitle.style.opacity = 0;
        devTitle.style.transition = "all 0.8s";

        homeImage.style.opacity = 0;
        homeImage.style.transition = "all 0.3s"


    } else if (distance < (finalP / 2)) {
        homeHeri.style.opacity = 1;
        homeHeri.style.transition = "all 5s";

        devTitle.style.opacity = 1;
        devTitle.style.transition = "all 2s";

        homeImage.style.opacity = 1;
        homeImage.style.transition = "all 10s"
    }
}

homeOpacity();

window.addEventListener("scroll", homeOpacity);

// |--                    --|