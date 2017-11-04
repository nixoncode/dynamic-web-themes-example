console.log("moving to mobile first");

var menuToggle = document.querySelector("#menuToggle");
var searchToggle = document.querySelector("#menuSearch");
var searchClose = document.querySelector("#searchClose");
var dropdown = document.querySelector("#dropdown");

menuToggle.addEventListener("click", toggleMenu);
searchToggle.addEventListener("click", toggleSearch);
searchClose.addEventListener("click", toggleSearch);


function toggleMenu() {
    dropdown.classList.toggle("close");
}

//hide the dropdown on blur
menuToggle.addEventListener("blur", () =>  dropdown.classList.add("close"));


function toggleSearch() {
    var search = document.querySelector("#search");
    search.classList.toggle("close");
}
