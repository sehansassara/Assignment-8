const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let arr = ["A", "B", "C", "D", "E", "F"];
let letterInterval, logInterval;
let isRunning = false;
const letterElements = document.getElementsByClassName("letter");
const animationSpeed = 1000;
const logSpeed = 5000;

function rotateLetters() {
    let last_value = arr.pop();
    arr.unshift(last_value);

    for (let i = 0; i < letterElements.length; i++) {
        letterElements[i].innerText = arr[i];
    }
}

function startQueue() {
    if (!isRunning) {
        letterInterval = setInterval(rotateLetters, animationSpeed);

        logInterval = setInterval(() => {
            console.log("Interval!!");
        }, logSpeed);

        isRunning = true;
    }
}

function stopQueue() {
    clearInterval(letterInterval);
    clearInterval(logInterval);
    isRunning = false;
}

startBtn.addEventListener('click', startQueue);
stopBtn.addEventListener('click', stopQueue);
