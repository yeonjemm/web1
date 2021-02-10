const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);   
}

function init() {
    loadName();
}
init();