loadTheme();

document.getElementById('green_theme').onclick = function () {
    document.getElementById('theme-css').setAttribute('href','/css/greenscheme.css')
}

document.getElementById('default-theme').onclick = function () {
    document.getElementById('theme-css').setAttribute('href','/css/style.css')
}

document.getElementById('natural-theme').onclick = function () {
    document.getElementById('theme-css').setAttribute('href','/css/natural.css')
}

document.getElementById('soft-theme').onclick = function () {
    document.getElementById('theme-css').setAttribute('href','/css/softmode.css')
}

var updateTheme = document.getElementById('theme-switch')
updateTheme.onclick = function () {
    var currentTheme = document.getElementById('theme-css').getAttribute('href')
    console.log(currentTheme)
   
    localStorage.setItem('theme',JSON.stringify(currentTheme))

}

function saveTheme () {
    var currentTheme = document.getElementById('theme-css').getAttribute('href')
   
    localStorage.setItem('theme',JSON.stringify(currentTheme))
}


function loadTheme () {
    var currentTheme = JSON.parse(localStorage.getItem("theme")) || [];
    console.log(currentTheme)
    if (currentTheme === null) {
        return;}
        else {document.getElementById('theme-css').href = currentTheme}

}