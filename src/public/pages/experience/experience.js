const expTitleNumber = document.querySelectorAll('.expTitleNumber');
const expPlus = document.querySelectorAll('.expPlus');
let radiance = false;
let val = 0;

function floatingNumbers() {
    expTitleNumber.forEach((num) => {

        if (val === 0) {
            num.style.transform = "translateY(30%)";
            val = 1;
        } else if (val === 1) {
            num.style.removeProperty('transform');
            val = 0;
        }

    });
}

function radianceTitles() {
    expPlus.forEach((title) => {
        if (radiance === false) {
            title.style.filter = 'drop-shadow(0 0 5px var(--primary-color))';
            radiance = true;
        } else if (radiance === true) {
            title.style.removeProperty('filter');
            radiance = false;
        }
    });
}

setInterval(floatingNumbers, 3000);
setInterval(radianceTitles, 5000);