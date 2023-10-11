let startTime;
let intervalId;
let isRunning = false;

const stopwatch = document.querySelector('.stopwatch');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', function () {
    if (isRunning) {
        stopTimer();
        startStopButton.textContent = 'Start';
    } else {
        startTimer();
        startStopButton.textContent = 'Stop';
    }
});

resetButton.addEventListener('click', function () {
    resetTimer();
});

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - (startTime || 0);
        intervalId = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    startTime = 0;
    updateTimer();
    startStopButton.textContent = 'Start';
}

function updateTimer() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = currentTime % 1000;

    hoursDisplay.textContent = hours.toString().padStart(2, '0');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(3, '0');
}
