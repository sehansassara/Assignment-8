const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const queue = document.querySelector('.queue');

let interval;
let colors = ['red', 'green', 'blue', 'yellow', 'pink'];

function rotateQueue() {
    const lastColor = colors.pop();
    colors.unshift(lastColor);

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.className = `box ${colors[index]}`;
    });
}

startBtn.addEventListener('click', () => {
    interval = setInterval(rotateQueue, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});
