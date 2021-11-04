const mediaQuery = window.matchMedia('(min-width:768px)');
const widgets = document.querySelector(".widgets")

console.log('hi hi');

function mobileView (e){
    if(e < mediaQuery){
        console.log('change me here!');
    }
}

mobileView(window.location);