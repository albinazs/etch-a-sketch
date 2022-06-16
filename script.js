let color = 'black';
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
    const random = Math.floor(Math.random() * 54) + 10;
    createGrid(random, random);
}
getRandom();

function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";    
}

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => color = 'white');

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => color = "reel");

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);

function clearAll () {
    const gridDivs = Array.from(document.querySelectorAll('.grid-divs'));
    gridDivs.forEach(div => div.style.backgroundColor = 'white');
}

//create default function

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseover', () => button.classList.add('scale')));
buttons.forEach(button => button.addEventListener('mouseout', () => button.classList.remove('scale')));