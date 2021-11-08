var largeLogo = document.querySelector("#largeLogo");
var smallLogo = document.querySelector("#smallLogo");

loadTheme();

if (document.getElementById("green_theme")) {
  document.getElementById("green_theme").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/greenscheme.css");
    if (largeLogo) {
      largeLogo.setAttribute("src", "/images/logoLongDark.png");
      smallLogo.setAttribute("src", "/images/logoDark.png");
    } else {
      smallLogo.setAttribute("src", "/images/logoDark.png");
    }
  };

  document.getElementById("default-theme").onclick = function () {
    document.getElementById("theme-css").setAttribute("href", "/css/style.css");
    if (largeLogo) {
      largeLogo.setAttribute("src", "/images/logoLongDark.png");
      smallLogo.setAttribute("src", "/images/logoDark.png");
    } else {
      smallLogo.setAttribute("src", "/images/logoDark.png");
    }
  };

  document.getElementById("natural-theme").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/natural.css");
    if (largeLogo) {
      largeLogo.setAttribute("src", "/images/logoLongDark.png");
      smallLogo.setAttribute("src", "/images/logoDark.png");
    } else {
      smallLogo.setAttribute("src", "/images/logoDark.png");
    }
  };

  document.getElementById("soft-theme").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/softmode.css");
    if (largeLogo) {
      largeLogo.setAttribute("src", "/images/logoLongDark.png");
      smallLogo.setAttribute("src", "/images/logoDark.png");
    } else {
      smallLogo.setAttribute("src", "/images/logoDark.png");
    }
  };

  document.getElementById("dark-mode").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/darkmode.css");
    if (largeLogo) {
      largeLogo.setAttribute("src", "/images/logoLongWhite.png");
      smallLogo.setAttribute("src", "/images/logoWhite.png");
    } else {
      smallLogo.setAttribute("src", "/images/logoWhite.png");
    }
  };

  document.getElementById("dark-mono").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/darkmono.css");
    if (largeLogo) {
      largeLogo.setAttribute("src", "/images/logoLongWhite.png");
      smallLogo.setAttribute("src", "/images/logoWhite.png");
    } else {
      smallLogo.setAttribute("src", "/images/logoWhite.png");
    }
  };

  var updateTheme = document.getElementById("theme-switch");
  updateTheme.onclick = function () {
    var currentTheme = document
      .getElementById("theme-css")
      .getAttribute("href");
    console.log(currentTheme);
    localStorage.setItem("theme", JSON.stringify(currentTheme));
  };

  function saveTheme() {
    var currentTheme = document
      .getElementById("theme-css")
      .getAttribute("href");
    localStorage.setItem("theme", JSON.stringify(currentTheme));
  }
}

function loadTheme() {
  var currentTheme = JSON.parse(localStorage.getItem("theme")) || [];

  if (currentTheme === null) {
    return;
  } else {
    document.getElementById("theme-css").href = currentTheme;
  }
}

function myLogo() {
  var storedTheme = JSON.parse(localStorage.getItem("theme"));
  var currentTheme = document.getElementById("theme-css").href;
  console.log(currentTheme);
  if (currentTheme) {
    if (
      currentTheme.includes("darkmono") ||
      currentTheme.includes("darkmode")
    ) {
      if (largeLogo) {
        largeLogo.setAttribute("src", "/images/logoLongWhite.png");
        smallLogo.setAttribute("src", "/images/logoWhite.png");
      } else {
        smallLogo.setAttribute("src", "/images/logoWhite.png");
      }
    } else {
      if (largeLogo) {
        largeLogo.setAttribute("src", "/images/logoLongDark.png");
        smallLogo.setAttribute("src", "/images/logoDark.png");
      } else {
        smallLogo.setAttribute("src", "/images/logoDark.png");
      }
    }
  } else if (storedTheme) {
    if (storedTheme.includes("darkmono") || storedTheme.includes("darkmode")) {
      if (largeLogo) {
        largeLogo.setAttribute("src", "/images/logoLongWhite.png");
        smallLogo.setAttribute("src", "/images/logoWhite.png");
      } else {
        smallLogo.setAttribute("src", "/images/logoWhite.png");
      }
    } else {
      if (largeLogo) {
        largeLogo.setAttribute("src", "/images/logoLongDark.png");
        smallLogo.setAttribute("src", "/images/logoDark.png");
      } else {
        smallLogo.setAttribute("src", "/images/logoDark.png");
      }
    }
  }
}

myLogo()