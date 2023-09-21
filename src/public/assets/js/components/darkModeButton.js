// Call Carousel

fetch("components/darkModeButton.html")
  .then((response) => response.text())
  .then((data) => {
    const btnDarkModeContent = document.getElementById("btnDarkModeContent");

    btnDarkModeContent.innerHTML = data;

    // |-- Functions BTN --|


    // |-- Efecto Nubes --|

    function createCloud() {
      const cloud = document.createElement("div");
      cloud.className = "cloud";

      //Tamaños
      const size = Math.random() * 250 + 50;
      cloud.style.width = `${size}px`;
      cloud.style.height = `${size * 0.5}px`;

      // Posicion
      cloud.style.left = `${Math.random() * 100}vw`;
      cloud.style.top = `${Math.random() * 100}vh`;

      cloudsContainer.appendChild(cloud);

      // Transition
      setTimeout(() => {
        cloud.style.opacity = 1;
        cloud.style.transform = "translateX(0)";
      }, 100);
    }


    //  |-- Efecto Estrellas --|
    function createStars() {

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

    const btnLightDark = document.getElementById("btnLightDark");
    const darkMode = document.getElementById("darkMode");
    const lightMode = document.getElementById("lightMode");
    const cloudsContainer = document.querySelector('.clouds');
    const starsContainer = document.querySelector('.stars');
    const html = document.documentElement;
    let count = localStorage.getItem("theme") === "dark" ? 1 : 0;

    // Function to toggle theme
    function toggleTheme() {

      if (count === 0) {
        lightMode.style.display = 'none';
        darkMode.style.display = 'flex';
        html.classList.remove("darkMode");
        localStorage.setItem("theme", "light");

        starsContainer.style.display = "none";
        cloudsContainer.style.display = "block";

        setInterval(() => {
          for (let i = 0; i < 2; i++) {
            createCloud();
          }
        }, 10000);

        count = 1;
      } else {
        lightMode.style.display = 'flex';
        darkMode.style.display = 'none';
        html.classList.add("darkMode");
        localStorage.setItem("theme", "dark");

        cloudsContainer.style.display = "none";
        starsContainer.style.display = "block";

        createStars();

        count = 0;
      }
    }
    
    toggleTheme();

    btnLightDark.addEventListener("click", toggleTheme);
  });