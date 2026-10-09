
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(function(link) {
    link.addEventListener("click", function()
{
    menu.classList.remove("active");
});

}) ;

document.addEventListener("click" , function(event) {
   if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("active")
   }
});
const boutonprojet = document.querySelector('[data-projet="portfolio"]');
boutonprojet.addEventListener("click" , function() {
alert (
    "Mon portfolio personnel\n\n" + 
    "Technologies utilisées : HTML, CSS et javascript.\n\n" + 
    "Objectif : présenter mes compétences et mes réalisations."
);
});

