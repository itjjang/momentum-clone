const fmToDo = document.querySelector("#fmToDo");
const userTask = document.querySelector("#userTask");
const pendingList = document.querySelector("#pendingList");

const LS_PENDING_NAME = "listPending";
let arrayPending = [];

function doAddList(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnDel = document.createElement("button");

    li.id = arrayPending.length + 1;
    li.style.listStyleType = "none";
    span.innerText = text;
    btnDel.innerText = "❌";

    btnDel.addEventListener("click", handleClickDel);

    li.appendChild(span);
    li.appendChild(btnDel);

    pendingList.appendChild(li);
    pushArray(li);
}

function doRemoveList(target) {
    const li = target.parentNode;
    const ul = li.parentNode;

    ul.removeChild(li);
    popArraty(li);
}

function pushArray(liObj) {
    const arrayElement = {
        id: 0,
        text: liObj.firstChild.innerText
    }
    arrayPending.push(arrayElement);
    reCheckArrayAndLiId();
}

function popArraty(liObj) {
    let newArray = arrayPending.filter(function(el) {
        return el.id !== parseInt(liObj.id);
    });
    arrayPending = newArray;

    reCheckArrayAndLiId();
}

function reCheckArrayAndLiId() {
    for(let i=0; i<arrayPending.length; i++) {
        arrayPending[i].id = i + 1;
    }
    for(let j=0; j<pendingList.childNodes.length; j++) {
        pendingList.childNodes[j].id = j + 1;
    }
}

function saveLsData() {
    localStorage.setItem(LS_PENDING_NAME, JSON.stringify(arrayPending));
}

function loadLsData() {
    const savedData = localStorage.getItem(LS_PENDING_NAME);
    if(savedData !== null) {
        const parsedData = JSON.parse(savedData);
        parsedData.forEach(function(data) {
            doAddList(data.text);
        });        
    }
}

function handleSubmit(e) {
    e.preventDefault();
    doAddList(userTask.value);    
    saveLsData(pendingList, 1);
    userTask.value = "";
}

function handleClickDel(e) {
    const ul = e.target.parentNode.parentNode;
    doRemoveList(e.target);
    saveLsData();
}

function init() {
    fmToDo.addEventListener("submit", handleSubmit);
    loadLsData();
}

init();
