
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