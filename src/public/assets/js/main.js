document.addEventListener("DOMContentLoaded", ()=>{
    const headerPlaceholder = document.getElementById("header");
    const homePlaceholder = document.getElementById("home");
    const mePlaceholder = document.getElementById("me");
    const contactPlaceholder = document.getElementById("contact");
    const footerPlaceholder = document.getElementById("footer");

    // Cargar el contenido del header
    fetch("templates/header.html")
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;
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
            mePlaceholder.innerHTML += data;
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
});
