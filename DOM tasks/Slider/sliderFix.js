const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = window.getComputedStyle(items);

rightButton.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight < 500){
        items.style.right = `${currentRight + 100}px`;
    }
});

leftButton.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0){
        items.style.right = `${currentRight - 100}px`;
    }
});