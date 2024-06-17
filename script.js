function createGrid(n) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");

    for(let i = 0; i < n; i++) {
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        container.style.height = 800/n + "px";

        for(let j  = 0; j < n; j++) {
            const square = document.createElement("div");

            square.setAttribute("class", "square")
            container.appendChild(square);
            square.addEventListener("mouseover", () => {
                colorSquare(square);
            })
        }
        grid.appendChild(container);
    }
    document.querySelector("body").appendChild(grid);
}

function colorSquare(square) {
    square.style.backgroundColor = "black";
}

function newGrid () {
    let n = prompt("Ingrese el número de casillas por lado. (máx. 100)");
    if(n <= 0 || n > 100) {
        alert("Ingrese un número válido");
        return 1;
    }
    const grid = document.querySelector(".grid");
    document.querySelector("body").removeChild(grid);
    createGrid(n);
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    newGrid();
})
createGrid(16);