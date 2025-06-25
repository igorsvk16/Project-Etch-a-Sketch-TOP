function makeGrids(size) {
    let screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            column.appendChild(row);
            row.classList.add("row");
            row.style.opacity = 1;
            row.addEventListener("mouseenter", () => {
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
                row.style.backgroundColor = rgb;
                row.style.opacity -= 0.1;
            })
        }
        screen.appendChild(column);
    }
}

makeGrids(16)

let changeSize = document.querySelector(".squareSize");

changeSize.addEventListener("click", () => {
    let newSize = +prompt("Enter new grid size (1-100)", "");

    if (newSize > 100) {
        alert("Enter new size < 100")
    } else {
        const sketchScreen = document.querySelector(".sketch-screen");
        sketchScreen.innerHTML = "";
        makeGrids(newSize);
    }});

