let color = 'blue';
const container = document.querySelector('.container');

function createGrid (rows, columns) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-columns', columns)
    for(let i = 0; i < rows * columns; i++) {
            const gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            gridDiv.classList.add('grid-divs');
        }
    handleMouseover();
    }

function handleMouseover () {
    const gridDivs = Array.from(document.querySelectorAll('.grid-divs'));
    gridDivs.forEach(div => div.addEventListener('mouseover', painting));
}

function painting(e) {
    e.target.style.backgroundColor = color;
}

function getRandom () {
    const random = Math.floor(Math.random() * 16) + 1;
    createGrid(random, random);
}
getRandom();

function randomColor () {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        color = "yellow";
    } else if (random === 1) {
        color = "orange";
    } else color = "black";
}

randomColor ();
