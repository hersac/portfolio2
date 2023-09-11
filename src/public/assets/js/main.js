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

        // -- Fade Effect --
        
        const tituloHome = document.querySelector("#titleHome");
        console.log(tituloHome);

    });

// Cargar el contenido del Home
fetch("pages/home.html")
    .then(response => response.text())
    .then(data => {
        homePlaceholder.innerHTML = data;
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
    });

// Cargar el contenido del footer
fetch("templates/footer.html")
    .then(response => response.text())
    .then(data => {
        footerPlaceholder.innerHTML = data;
    });