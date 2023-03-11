const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const items = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();

    if (direction == "right") {
        items.appendChild(items.firstElementChild);
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
}

rightButton.addEventListener("click", e => {
    loop("right", e);
});

leftButton.addEventListener("click", e => {
    loop("left", e);
});