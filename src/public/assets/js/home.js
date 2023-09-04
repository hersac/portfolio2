const title = document.getElementsByClassName('heri1');

function radiance(){

    title ? title[0].style.filter = 'drop-shadow(0 0 5px var(--primary-color))' : console.log("prueba");
}

setInterval(radiance, 2000);