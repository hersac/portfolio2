document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("header");
    const footerPlaceholder = document.getElementById("footer");

    // Cargar el contenido del header
    fetch("templates/header.html")
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;
        });

    // Cargar el contenido del footer
    fetch("templates/footer.html")
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        });
});
