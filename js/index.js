const buttonHamb = document.getElementById('button-toggle');
const navbar = document.getElementById("navbar");


buttonHamb.addEventListener("click", function() {
    if(buttonHamb.className === "hamburger--open") {
        buttonHamb.className = "hamburger--close";
        setTimeout(() => {
            navbar.style.right = "0px"; 
        } ,100);
        navbar.style.display = "block";

    } else {
        buttonHamb.className = "hamburger--open";
        setTimeout(() => {
            navbar.style.display = "none";
        }  ,1200);
        navbar.style.right = "-426px";
    }
});