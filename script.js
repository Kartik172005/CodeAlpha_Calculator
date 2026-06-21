const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');

let currentInput = '0';
let previousInput = '';
let operation = undefined;

function clearScreen() {
    currentInput = '0';
    previousInput = '';
    operation = undefined;
    updateDisplay();
}

function deleteNumber() {
    if (currentInput === '0') return;
    currentInput = currentInput.toString().slice(0, -1);
    if (currentInput === '') currentInput = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    if (currentInput === '0' && number !== '.') {
        currentInput = number.toString();
    } else {
        currentInput = currentInput.toString() + number.toString();
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '*': computation = prev * current; break;
        case '/': computation = current === 0 ? "Error" : prev / current; break;
        default: return;
    }
    currentInput = computation.toString();
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    currentDisplay.innerText = currentInput;
    if (operation != null) {
        previousDisplay.innerText = `${previousInput} ${operation === '*' ? '×' : operation === '/' ? '÷' : operation}`;
    } else {
        previousDisplay.innerText = '';
    }
}

// Bonus Keyboard Support
document.addEventListener('keydown', (e) => {
    if ((e.key >= 0 && e.key <= 9) || e.key === '.') appendNumber(e.key);
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') appendOperator(e.key);
    if (e.key === 'Enter' || e.key === '=') compute();
    if (e.key === 'Backspace') deleteNumber();
    if (e.key === 'Escape') clearScreen();
});