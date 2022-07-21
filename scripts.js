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
    setNewGrid();
}