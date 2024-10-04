window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 500);
});

function changeColor() {
    document.getElementById("myButton").style.backgroundColor = "blue";
}