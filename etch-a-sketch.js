
let gridPixelSize = 900;
let gridSize = 16;

function createRow(gridSize) {
    const rowElem = document.createElement("div");
    rowElem.classList.add("row");
    for (let i = 0; i < gridSize; i++) {
        const pixelElem = document.createElement("div");
        pixelElem.classList.add("pixel");
        pixelElem.style.opacity = 0;
        pixelElem.addEventListener("mouseover", () => {
            if (pixelElem.style.opacity < 1) {
                pixelElem.style.opacity = Number(pixelElem.style.opacity) + 0.1;
            }
        })
        rowElem.appendChild(pixelElem);
    }
    return rowElem;
}

function createGrid(gridSize) {
    const containerElem = document.createElement("div");
    containerElem.id = "container";
    for (let i = 0; i < gridSize; i++) {
        containerElem.appendChild(createRow(gridSize));
    }
    return containerElem;
}

function getGridSize() {
    let newGridSize = prompt("Enter grid size", gridSize);
    if (newGridSize != null) {
        return Number(newGridSize);
    }
    return gridSize;
}

function deleteGrid() {
    const currentGrid = document.getElementById("container");
    currentGrid.remove();
}

document.body.appendChild(createGrid(gridSize));

const gridSizeButtonElem = document.querySelector("button");
gridSizeButtonElem.addEventListener("click", () => {
    console.log("hello");

    gridSize = getGridSize();
    deleteGrid();
    document.body.appendChild(createGrid(gridSize));
})

