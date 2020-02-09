const body = document.querySelector("body");

const IMAGE_MIN_NUM = 1;
const IMAGE_MAX_NUM = 3;

function makeImage(num) {
    const image = new Image();
    image.src = `./images/${num}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function makeRanNum() {
    return Math.floor(Math.random() * (IMAGE_MAX_NUM - IMAGE_MIN_NUM + 1)) + IMAGE_MIN_NUM;
}

function init() {
    makeImage(makeRanNum());
}

init();
