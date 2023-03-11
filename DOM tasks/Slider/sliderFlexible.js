const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = window.getComputedStyle(items);
const slider__items = document.querySelectorAll(".slider__item");

const minRight = 0;
const itemWidth = window.getComputedStyle(slider__items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (slider__items.length - preShownItems) * step;
let currentRight = 0;

items.style.right = currentRight;

rightButton.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = `${currentRight}px`;
    }
});

leftButton.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = `${currentRight}px`;
    }
});