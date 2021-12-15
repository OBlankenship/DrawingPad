function generateSquares(numSquares) {
    let container = document.getElementById("container");
    let perRow = Math.sqrt(numSquares);
    let squareWidth = parseInt(99 / perRow)  + "%";
    
    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareWidth
        square.style.opacity = "0%"
        square.addEventListener('mouseover', hoverSquare);
        container.appendChild(square);
    }
}

generateSquares(600);

function hoverSquare() {
    let curOpacity = event.target.style.opacity;
    curOpacity = Number(curOpacity)
    curOpacity += .10;
    event.target.style.opacity = curOpacity
}



