// Call Carousel

fetch("components/darkModeButton.html")
  .then((response) => response.text())
  .then((data) => {
    const btnDarkModeContent = document.getElementById("btnDarkModeContent");

    btnDarkModeContent.innerHTML = data;

  });