const container = document.querySelector('.container');

function createGrid (rows, columns) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-columns', columns)
    for(let i = 0; i < rows * columns; i++) {
            const gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            gridDiv.classList.add('grid-divs');
        }
    }

function getRandom () {
    const random = Math.floor(Math.random() * 16) + 1;
    createGrid(random, random);
}
getRandom();
