function generateSquares(numSquares) {
    let container = document.getElementById("container");
    removeAllChildNodes(container);
    let squareWidth = parseInt(100 / numSquares)  + "%";
    let colorField = document.getElementById("colorField");
    let newColor = colorField.value;
    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = squareWidth
            square.style.opacity = "0%"
            square.style.background = newColor
            square.addEventListener('mouseover', hoverSquare);
            container.appendChild(square);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hoverSquare(e) {
    let curOpacity = e.target.style.opacity;
    curOpacity = Number(curOpacity);
    curOpacity += .10;
    e.target.style.opacity = curOpacity;
}

function newGrid(e) {
    let sizeField = document.getElementById("sizeField");
    let newSize = sizeField.value;
    generateSquares(newSize);
}

let btn = document.getElementById("sizeButton");
btn.addEventListener('click', newGrid);

generateSquares(25);

