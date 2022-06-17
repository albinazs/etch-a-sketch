let currentMode = 'default';
let density = 32;

//CREATING GRID
const container = document.querySelector('.container');

function createGrid (density) {
    console.log(currentMode);
    container.style.gridTemplateColumns = `repeat(${density}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${density}, 1fr)`;
    for(let i = 0; i < density * density; i++) {   
        console.log(currentMode);    
            const gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            gridDiv.classList.add('grid-divs');
            gridDiv.addEventListener('mouseover', painting);
            
        }
    }

createGrid(density);

function painting(e) {
    console.log(currentMode);
    if(currentMode === 'rainbow') {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (currentMode === 'default') {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseover', () => button.classList.add('scale')));
buttons.forEach(button => button.addEventListener('mouseout', () => button.classList.remove('scale')));

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearAll);

function clearAll () {
    const gridDivs = Array.from(document.querySelectorAll('.grid-divs'));
    gridDivs.forEach(div => div.style.backgroundColor = 'white');
}

const defaultButton = document.querySelector('.default');
const rainbowButton = document.querySelector('.rainbow');
const eraserButton = document.querySelector('.eraser');

defaultButton.addEventListener('click', () => currentMode = 'default');
rainbowButton.addEventListener('click', () => currentMode = 'rainbow');
eraserButton.addEventListener('click', () => currentMode = 'eraser');

const slider = document.querySelector('.slider');
const slideOutput = document.querySelector('.outputValue');
slideOutput.textContent = slider.value;
let input = slideOutput.textContent;

slider.oninput = function () {
    slideOutput.textContent = this.value;
    input = slideOutput.textContent;
    console.log(input);
    createGrid(input);
}



