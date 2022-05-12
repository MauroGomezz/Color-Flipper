const colors = ["Red", "Blue", "Yellow"]
let text = document.querySelector("#color");
let btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    const colorChange = randomColor();

    document.body.style.backgroundColor = colors[colorChange];
    text.textContent = colors[colorChange]
})

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}