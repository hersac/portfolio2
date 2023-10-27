const headerPlaceholder = document.getElementById("header");
const homePlaceholder = document.getElementById("home");
const mePlaceholder = document.getElementById("me");
const projectsPlaceholder = document.getElementById("projects");
const experiencePlaceholder = document.getElementById("experience");
const contactPlaceholder = document.getElementById("contact");
const footerPlaceholder = document.getElementById("footer");

// Cargar el contenido del header
fetch("templates/header/header.html")
    .then(response => response.text())
    .then(data => {
        headerPlaceholder.innerHTML = data;

        const headerCSS = document.createElement('link');
        headerCSS.rel = "stylesheet";
        headerCSS.type = "text/css";
        headerCSS.href = "templates/header/header.css";
        document.head.appendChild(headerCSS);

        const headerMobileCSS = document.createElement('link');
        headerMobileCSS.rel = "stylesheet";
        headerMobileCSS.type = "text/css";
        headerMobileCSS.href = "templates/header/headerMobile.css";
        document.head.appendChild(headerMobileCSS);
        
		const headerJS = document.createElement('script');
        headerJS.src = "templates/header/header.js";
        document.body.appendChild(headerJS);
    });


// Cargar el contenido del Home
fetch("pages/home/home.html")
    .then(response => response.text())
    .then(data => {
        homePlaceholder.innerHTML = data;

        const homeCSS = document.createElement('link');
        homeCSS.rel = "stylesheet";
        homeCSS.type = "text/css";
        homeCSS.href = "pages/home/home.css";
        document.head.appendChild(homeCSS);

        const homeMobileCSS = document.createElement('link');
        homeMobileCSS.rel = "stylesheet";
        homeMobileCSS.type = "text/css";
        homeMobileCSS.href = "pages/home/homeMobile.css";
        document.head.appendChild(homeMobileCSS);

        const homeJS = document.createElement('script');
        homeJS.src = "pages/home/home.js";
        document.body.appendChild(homeJS);

    });

// Cargar el contenido del Me
fetch("pages/me/me.html")
    .then(response => response.text())
    .then(data => {
        mePlaceholder.innerHTML = data;

        const meCSS = document.createElement('link');
        meCSS.rel = "stylesheet";
        meCSS.type = "text/css";
        meCSS.href = "pages/me/me.css";
        document.head.appendChild(meCSS);

        const meJS = document.createElement('script');
        meJS.src = "pages/me/me.js";
        document.body.appendChild(meJS);
    });


fetch("pages/projects/projects.html")
    .then(response => { response.text() })
    .then(data => {
        projectsPlaceholder.innerHTML = data;

        const projectsCSS = document.createElement('link');
        projectsCSS.rel = "stylesheet";
        projectsCSS.type = "text/css";
        projectsCSS.href = "pages/projects/projects.css";
        document.head.appendChild(projectsCSS);

        const projectsJS = document.createElement('script');
        projectsJS.src = "pages/projects/projects.js";
        document.body.appendChild(projectsJS);

    });

// Cargar el contenido del Experience
fetch("pages/experience/experience.html")
    .then(response => response.text())
    .then(data => {
        experiencePlaceholder.innerHTML = data;

        const experienceCSS = document.createElement('link');
        experienceCSS.rel = "stylesheet";
        experienceCSS.type = "text/css";
        experienceCSS.href = "pages/experience/experience.css";
        document.head.appendChild(experienceCSS);

        const experienceJS = document.createElement('script');
        experienceJS.src = "pages/experience/experience.js";
        document.body.appendChild(experienceJS);
    });

// Cargar el contenido del Contact
fetch("pages/contact/contact.html")
    .then(response => response.text())
    .then(data => {
        contactPlaceholder.innerHTML = data;

        const contactCSS = document.createElement('link');
        contactCSS.rel = "stylesheet";
        contactCSS.type = "text/css";
        contactCSS.href = "pages/contact/contact.css";
        document.head.appendChild(contactCSS);

        const contactJS = document.createElement('script');
        contactJS.src = "pages/contact/contact.js";
        document.body.appendChild(contactJS);

    });

// Cargar el contenido del footer
fetch("templates/footer/footer.html")
    .then(response => response.text())
    .then(data => {
        footerPlaceholder.innerHTML = data;

        const footerCSS = document.createElement('link');
        footerCSS.rel = "stylesheet";
        footerCSS.type = "text/css";
        footerCSS.href = "templates/footer/footer.css";
        document.head.appendChild(footerCSS);

        const footerJS = document.createElement('script');
        footerJS.src = "templates/footer/footer.js";
        document.body.appendChild(footerJS);
    });

    // Cargar Dark Mode Component
fetch("components/darkModeButton/darkModeButton.html")
.then(response => response.text())
.then(data => {
    const btnDarkModeContent = document.getElementById("btnDarkModeContent");
    btnDarkModeContent.innerHTML = data;

    const footerCSS = document.createElement('link');
    footerCSS.rel = "stylesheet";
    footerCSS.type = "text/css";
    footerCSS.href = "components/darkModeButton/darkModeButton.css";
    document.head.appendChild(footerCSS);

    const footerJS = document.createElement('script');
    footerJS.src = "components/darkModeButton/darkModeButton.js";
    document.body.appendChild(footerJS);
});

