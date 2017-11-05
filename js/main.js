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
menuToggle.addEventListener("blur", () => dropdown.classList.add("close"));


function toggleSearch() {
    var search = document.querySelector("#search");
    search.classList.toggle("close");
}

let menuTheme = document.querySelector("#menuTheme");
let themeDropdown = document.querySelector(".theme-dropdown");

menuTheme.addEventListener("click", () => themeDropdown.classList.toggle("close"));
//menuTheme.addEventListener("blur", () => themeDropdown.classList.add("close"));

let themes = document.querySelectorAll(".themer");
themes.forEach(theme => theme.addEventListener("click", themeChanger));

/**
 * 
 * @param {Event} e 
 */
function themeChanger(e) {
    e.preventDefault();

    let selectedTheme = e.target.attributes["data-theme"].textContent;

    

    switch (selectedTheme) {
        case "teal":
            removeAddClassToBody("theme-teal");
            console.log("switched to theme-teal");
            break;
        case "indigo":
            removeAddClassToBody("theme-indigo");
            console.log("switched to theme-indigo");
            break;
        case "dark":
            removeAddClassToBody("theme-dark");
            console.log("switched to theme-dark");
            break;
        case "blue-grey":
            removeAddClassToBody("theme-bg");
            console.log("switched to theme-blue-grey");
            break;

    }

    // close the dropdown
    themeDropdown.classList.add("close");
}
/**
 * 
 * @param {string} className 
 */
function removeAddClassToBody(className){

    let body = document.querySelector("body");
    let themes = ["theme-teal", "theme-indigo", "theme-dark", "theme-bg"];

    themes.forEach(theme => body.classList.remove(theme));
    body.classList.add(className);
}