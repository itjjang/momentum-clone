const form = document.querySelector("#fmUserGreet");
const input = document.querySelector("#userName");
const greeting = document.querySelector("#greeting");

const LS_USER_NAME = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    greeting.classList.add(SHOWING_CN);
}

function askForName() {
    greeting.classList.remove(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    form.classList.add(SHOWING_CN);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = input.value;

    if(currentValue) {
        saveName(currentValue);
        paintGreeting(currentValue);        
    }
}

function saveName(text) {
    localStorage.setItem(LS_USER_NAME, text);
}

function loadName() {
    const currentUser = localStorage.getItem(LS_USER_NAME);
    
    if(currentUser) {
        paintGreeting(currentUser);
    } else {
        askForName();
    }
}

function init() {
    loadName();
}

init();
