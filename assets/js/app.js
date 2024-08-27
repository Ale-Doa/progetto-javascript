let counterValue = 0;

const app = document.getElementById ('counter-app');

const counterDisplay = document.createElement ('div');
counterDisplay.textContent = counterValue;
counterDisplay.setAttribute ('class', 'counter-display');

const decrementButton = document.createElement ('button');
decrementButton.textContent = '-';
decrementButton.setAttribute ('class', 'decrement-button');

const incrementeButton = document.createElement ('button');
incrementeButton.textContent = '+';
incrementeButton.setAttribute ('class', 'increment-button');

const resetButton = document.createElement ('button');
resetButton.textContent = 'Reset';
resetButton.setAttribute ('class', 'reset-button');

const settingsButton = document.createElement ('button');
settingsButton.textContent = 'Settings';
settingsButton.setAttribute ('class', 'settings-button');

app.appendChild (counterDisplay);
app.appendChild (decrementButton);
app.appendChild (incrementeButton);
app.appendChild (resetButton);
app.appendChild (settingsButton);

const savedValue = localStorage.getItem('counterValue');
counterValue = savedValue ? parseInt(savedValue) : 0;
counterDisplay.textContent = counterValue;

const updateCounter = () => {
    counterDisplay.textContent = counterValue;
    localStorage.setItem('counterValue', counterValue);
};

incrementeButton.addEventListener ('click', () => {
    counterValue ++;
    updateCounter ();
});

decrementButton.addEventListener ('click', () => {
    counterValue --;
    updateCounter ();
});

resetButton.addEventListener ('click', () => {
    counterValue = 0;
    updateCounter ();
});

