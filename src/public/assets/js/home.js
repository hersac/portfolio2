const title = document.getElementsByClassName('heri1');
let validator = 0;

function radiance(){
    if(validator===0){
        title[0].style.filter = 'drop-shadow(0 0 5px var(--primary-color))';
        validator = 1;
    } else{
        title[0].style.removeProperty('filter');
        validator = 0;
    }
}

setInterval(radiance, 2000);