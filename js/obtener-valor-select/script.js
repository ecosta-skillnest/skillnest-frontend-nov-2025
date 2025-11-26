const color = document.querySelector("#color");
const select = document.querySelector("#seleccionar-color");

select.addEventListener("change", function () {
    color.textContent = select.value;
});