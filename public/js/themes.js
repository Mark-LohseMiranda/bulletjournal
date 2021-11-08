var largeLogo = document.querySelector('#largeLogo');
var smallLogo = document.querySelector('#smallLogo');

loadTheme();

if (document.getElementById("green_theme")) {
  document.getElementById("green_theme").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/greenscheme.css");
  };

  document.getElementById("default-theme").onclick = function () {
    document.getElementById("theme-css").setAttribute("href", "/css/style.css");
  };

  document.getElementById("natural-theme").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/natural.css");
  };

  document.getElementById("soft-theme").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/softmode.css");
  };

  document.getElementById("dark-mode").onclick = function () {
    document.getElementById("theme-css").setAttribute("href", "/css/darkmode.css");
  };

  document.getElementById("dark-mono").onclick = function () {
    document
      .getElementById("theme-css")
      .setAttribute("href", "/css/darkmono.css");
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

  console.log(currentTheme);
  if (currentTheme === null) {
    return;
  } else {
    document.getElementById("theme-css").href = currentTheme;
    if(currentTheme === "/css/darkmono.css" || currentTheme === "/css/darkmode.css"){
      if(largeLogo){
        largeLogo.setAttribute("src", "/images/logoLongWhite.png");
        smallLogo.setAttribute("src", "/images/logoWhite.png")
      }else{
        smallLogo.setAttribute("src", "/images/logoWhite.png")
      }
    }
  }
}

