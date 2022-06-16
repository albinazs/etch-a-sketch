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
    e.target.style.backgroundColor = randomColor ();
}

function getRandom () {
    const random = Math.floor(Math.random() * 16) + 10;
    createGrid(random, random);
}
getRandom();

function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";    
}
