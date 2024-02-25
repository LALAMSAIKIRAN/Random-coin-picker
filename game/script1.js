
let numbersCalled = [];
let numbersHistory = [];


function generateRandomNumber() {
    return Math.floor(Math.random() * 90) + 1;
}

function callNumber() {
    let randomNumber;
    do {
        randomNumber = generateRandomNumber();
    } while (numbersCalled.includes(randomNumber)); // Ensure the number hasn't already been called
    numbersCalled.push(randomNumber);
    numbersHistory.push(randomNumber);
    updateDisplay();
}


function updateDisplay() {
    document.getElementById('numberDisplay').innerText = numbersCalled[numbersCalled.length - 1];
    document.getElementById('historyDisplay').innerText = numbersHistory.join(', ');
}

document.getElementById('callNumberButton').addEventListener('click', callNumber);
