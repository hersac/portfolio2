// Call Carousel

fetch("components/darkModeButton.html")
  .then((response) => response.text())
  .then((data) => {
    const btnDarkModeContent = document.getElementById("btnDarkModeContent");

    btnDarkModeContent.innerHTML = data;

    // |-- Functions BTN --|

    const btnLightDark = document.getElementById("btnLightDark");
    const darkMode = document.getElementById("darkMode");
    const lightMode = document.getElementById("lightMode");
    const html = document.documentElement;
    let count = localStorage.getItem("theme") === "dark" ? 0 : 1;

    // Function to toggle theme
    function toggleTheme() {
      if (count === 0) {
        lightMode.style.display = 'none';
        darkMode.style.display = 'flex';
        html.classList.remove("darkMode");
        localStorage.setItem("theme", "dark");
        count = 1;
      } else {
        lightMode.style.display = 'flex';
        darkMode.style.display = 'none';
        html.classList.add("darkMode");
        localStorage.setItem("theme", "light");
        count = 0;
      }
    }
    
    toggleTheme();

    btnLightDark.addEventListener("click", toggleTheme);
  });
