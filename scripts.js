const defaultMode = 'classic';
const defaultSize = 32;
const defaultColor = '#CF03FC';

let currentMode = defaultMode;
let currentSize = defaultSize;
let currentColor = defaultColor;

const etchGrid = document.getElementById('etch-grid');
const colorDropper = document.getElementById('color-tool');
const classicButton = document.getElementById('classic-tool');
const eraserButton = document.getElementById('eraser-tool');
const resetButton = document.getElementById('reset-tool');
const sizeSlider = document.getElementById('sizing-tool');
const sizeValue = document.getElementById('size-value');

colorDropper.oninput = (e) => setColorChoice(e.target.value);
colorDropper.onclick = () => setModeChoice('color');
classicButton.onclick = () => setModeChoice('classic');
eraserButton.onclick = () => setModeChoice('erase');
resetButton.onclick = () => resetGrid();
sizeSlider.onchange = (e) => setSizeChoice(e.target.value);
sizeSlider.onmousemove = (e) => setSizeValue(e.target.value);


function setColorChoice(colorChoice) {
    currentColor = colorChoice;
}

function setModeChoice(modeChoice) {
    currentMode = modeChoice;
}

function setSizeChoice(sizeChoice) {
    currentSize = sizeChoice;
    resetGrid();
}

function setSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function resetGrid() {
    etchGrid.innerHTML = '';
    setNewGrid(currentSize);
}

function setNewGrid(size) {
    etchGrid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('cell');
        etchGrid.appendChild(gridDiv);
    }
    colorGrid();
}

function colorGrid() {

    let pressDown = false;
    document.body.onmousedown = () => (pressDown = true);
    document.body.onmouseup = () => (pressDown = false);

    let gridDiv = document.querySelectorAll("div.cell");
    gridDiv.forEach(div => {
        div.addEventListener('mousedown', (e) => {
            if (e.type === 'mouseover' && !pressDown) return;
            if (currentMode === 'classic') {
                let opacity = Number(div.style.opacity);
                div.style.opacity = opacity >= 1 ? "1" : opacity + 0.2 + ""; 
            } else if (currentMode === 'color') {
                div.style.backgroundColor = currentColor;
                div.style.opacity = 1;
            } else if (currentMode === 'erase') {
                div.style.backgroundColor = '#faf0fa';
            }
        })
        div.addEventListener('mouseover', (e) => {
            if (e.type === 'mouseover' && !pressDown) return;
            if (currentMode === 'classic') {
                let opacity = Number(div.style.opacity);
                div.style.opacity = opacity >= 1 ? "1" : opacity + 0.2 + ""; 
            } else if (currentMode === 'color') {
                div.style.backgroundColor = currentColor;
                div.style.opacity = 1;
            } else if (currentMode === 'erase') {
                div.style.backgroundColor = '#faf0fa';
            }
        })
    })
}


window.onload = () => setNewGrid(defaultSize);