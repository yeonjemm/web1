const title_div = document.querySelector(".title_div");
const titleH3 = title_div.querySelector("h3");

console.log(title_div);
console.log(titleH3);


titleH3.addEventListener("click", hanldeClick);

function hanldeClick(event) {
    console.log(event);
    titleH3.style.color="blue";
}


const title = document.querySelector("#title");
console.log(title);

const CLICKED_CLASS = "clicked";

function hanldeClick_title() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", hanldeClick_title);
}
init();