function createDivs(row, col) {
    const container = document.getElementById("container");
    container.replaceChildren();
    const color = document.getElementById("color").value;
    for (let i = 0; i < row; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("divRow");
        container.appendChild(divRow);
        for (let j = 0; j < col; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", (event) => event.target.style.background = color);
            div.classList.add("divElement");
            divRow.appendChild(div);
        }
    }
}

function generateGrid() {
    const row = Number(document.getElementById("row").value);
    const col = Number(document.getElementById("col").value);
    if (isNaN(row) || isNaN(col) || row < 1 || col < 1) {
        alert("Please enter valid integers larger than 0");
        return;
    }
    createDivs(row, col);
}

const button = document.getElementById("submit");
button.addEventListener("click", generateGrid);

createDivs(150, 150);