let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let text = document.querySelector("#color");
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colors[randomColor()];
    }
    text.textContent = color;
    document.body.style.backgroundColor = color;
})

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}