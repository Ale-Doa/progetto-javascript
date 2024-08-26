let counterValue = parseInt (localStorage.getItem ('counterValue')) || 0;

const counter = document.createElement ('div');
counter.setAttribute ('class', 'counter');
document.body.appendChild (counter);

const counterDisplay = document.createElement ('div');
counterDisplay.textContent = counterValue;
counterDisplay.setAttribute ('class', 'counter-display');

const decrementButton = document.createElement ('button');
decrementButton.textContent = '-';
decrementButton.setAttribute ('class', 'decrement-button');

const incrementButton = document.createElement ('button');
incrementButton.textContent = '+';
incrementButton.setAttribute ('class', 'increment-button');

const resetButton = document.createElement ('button');
resetButton.textContent = 'Reset';
resetButton.setAttribute ('class', 'reset-button');

const settingsButton = document.createElement ('button');
settingsButton.textContent = 'Settings';
settingsButton.setAttribute ('class', 'settings-button');

counter.appendChild (counterDisplay);
counter.appendChild (decrementButton);
counter.appendChild (incrementButton);
counter.appendChild (resetButton);
counter.appendChild (settingsButton);

const settingsContainer = document.createElement ('div');
settingsContainer.setAttribute ('class', 'settings-container');

document.body.appendChild (settingsContainer);

const inputField = document.createElement('input');
inputField.type = 'number';
inputField.placeholder = 'Set initial value';
inputField.setAttribute ('class', 'input-field')

const setValueButton = document.createElement('button');
setValueButton.textContent = 'Set Value';

const stepInput = document.createElement ('input');
stepInput.type = 'number';
stepInput.placeholder = 'Set step value';

settingsContainer.appendChild (inputField);
settingsContainer.appendChild (stepInput);
settingsContainer.appendChild (setValueButton);

settingsButton.addEventListener('click', () => {
    settingsContainer.style.display = settingsContainer.style.display === 'none' ? 'flex' : 'none';
});

setValueButton.addEventListener ('click', () => {
    const newValue = parseInt (inputField.value);
    if (!isNaN (newValue)) {
        counterValue = newValue;
        counterDisplay.textContent = counterValue;
        localStorage.setItem ('counterValue', counterValue);
    }
});

incrementButton.addEventListener ('click', () => {
    const step = parseInt (stepInput.value) || 1;
    counterValue += step;
    counterDisplay.textContent = counterValue;
    localStorage.setItem ('counterValue', counterValue); 
});

decrementButton.addEventListener ('click', () => {
    const step = parseInt (stepInput.value) || 1;
    counterValue -= step;
    counterDisplay.textContent = counterValue;
    localStorage.setItem ('counterValue', counterValue);
});

resetButton.addEventListener ('click', () => {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
    localStorage.setItem ('counterValue', counterValue);
})