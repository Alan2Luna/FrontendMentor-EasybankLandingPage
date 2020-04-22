const buttonHamb = document.getElementById('button-toggle');
const navbar = document.getElementById("navbar");


buttonHamb.addEventListener("click", function() {
    if(buttonHamb.className === "hamburger--open") {
        buttonHamb.className = "hamburger--close";
        navbar.style.right = "0px"
    } else {
        buttonHamb.className = "hamburger--open";
        navbar.style.right = "-375px"
    }
});