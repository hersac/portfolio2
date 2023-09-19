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

        // |-- Smooth Scrolling Efect --|

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

        // |--                       --|
    });

// Cargar el contenido del Home
fetch("pages/home.html")
    .then(response => response.text())
    .then(data => {
        homePlaceholder.innerHTML = data;

        // |-- Scroll fade effect --|

        const homeTitles = document.getElementById("homeTitles");
        const homeHeri = document.getElementById('homeHeri');
        const devTitle = document.getElementById('devTitle');
        const homeImage = document.getElementById('homeImage');

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

    });

// Cargar el contenido del footer
fetch("templates/footer.html")
    .then(response => response.text())
    .then(data => {
        footerPlaceholder.innerHTML = data;
    });


//  |-- Efecto Estrellas --|
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starsContainer.appendChild(star);
    }
}

createStars();
