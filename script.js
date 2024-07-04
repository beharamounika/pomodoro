const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let timeLeft = 1500; // 25 minutes in seconds
let interval;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            playAlarm();
            timeLeft = 1500; // reset to 25 minutes for next use
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

function playAlarm() {
    const alarm = new Audio('alarm.mp3'); // Ensure you have an alarm sound file named 'alarm.mp3'
    alarm.play();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateTimer(); // Initialize the timer display
