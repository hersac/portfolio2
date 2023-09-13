const headerPlaceholder = document.getElementById("header");
const homePlaceholder = document.getElementById("home");
const mePlaceholder = document.getElementById("me");
const experiencePlaceholder = document.getElementById("experience");
const contactPlaceholder = document.getElementById("contact");
const footerPlaceholder = document.getElementById("footer");

// Cargar el contenido del header
fetch("templates/header.html")
    .then(response => response.text())
    .then(data => {
        headerPlaceholder.innerHTML = data;

        // -- Smooth Scrolling Efect --

        const links = document.querySelectorAll('nav li a');
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                document.querySelector(href).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });

        // --                       --
    });

// Cargar el contenido del Home
fetch("pages/home.html")
    .then(response => response.text())
    .then(data => {
        homePlaceholder.innerHTML = data;

        // -- Scroll fade effect -- 

        const homeTitles = document.getElementById("homeTitles");
        const homeHeri = document.getElementById('homeHeri');
        const devTitle = document.getElementById('devTitle');
        const homeImage = document.getElementById('homeImage');

        window.addEventListener("scroll", () => {
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
        });

        // --                    -- 
    });

// Cargar el contenido del Me
fetch("pages/me.html")
    .then(response => response.text())
    .then(data => {
        mePlaceholder.innerHTML = data;
    });

// Cargar el contenido del Me
fetch("pages/experience.html")
    .then(response => response.text())
    .then(data => {
        experiencePlaceholder.innerHTML = data;
    });

// Cargar el contenido del Contact
fetch("pages/contact.html")
    .then(response => response.text())
    .then(data => {
        contactPlaceholder.innerHTML = data;

        // -- Deal Effect --

        window.addEventListener("scroll", () => {
            const contactContent = document.querySelectorAll('.contactContent');
            const iconContent = document.querySelectorAll(".iconContent");
            const windowHeight = contactContent.offsetHeight;
            const finalPosition = window.scrollY;
            const elementPosition = contactContent[0].offsetTop;
            const activPosition = elementPosition / 2;
/*
            if(finalPosition>activPosition){
                iconContent.forEach(icon => {
                    console.log(icon);
                    console.log(`${finalPosition}, ${elementPosition}, ${activPosition}`);
                })
            }
*/
            console.log(windowHeight);
        });

        // --             --

    });



// Cargar el contenido del footer
fetch("templates/footer.html")
    .then(response => response.text())
    .then(data => {
        footerPlaceholder.innerHTML = data;
    });