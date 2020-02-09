const clockTitle = document.querySelector("#clockTitle");

function timeCheck() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const h = `${hours   < 10 ? `0${hours}`   : hours}`;
    const m = `${minutes < 10 ? `0${minutes}` : minutes}`;
    const s = `${seconds < 10 ? `0${seconds}` : seconds}`;

    clockTitle.innerText = `${h}:${m}:${s}`;
}

function init() {
    timeCheck();
    setInterval(timeCheck,1000);
}

init();
