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
