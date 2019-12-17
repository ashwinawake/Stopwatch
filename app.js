const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const lapButton = document.querySelector('[data-action="lap"]')
const lap = document.querySelector('.lapField');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let interval;
let isRunning = false;
let numOfMinutes;
let numOfSecs;
// Create functions
function startTimer() {
  if(isRunning) return;
  isRunning = true;
  interval = setInterval(incrementTimer, 1000)
}

function stopTimer() {
  if(!isRunning) return;
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  timerTime = 0;
  lap.innerText = 'Lap';
  minutes.innerText = '00';
  seconds.innerText = '00';
  numOfSecs = 0;
  numOfMinutes = 0;
}

function incrementTimer(){
    timerTime++;
    numOfMinutes = Math.floor(timerTime/60);
    numOfSecs    = timerTime%60;
    seconds.innerText = padTimer(numOfSecs);
    minutes.innerText = padTimer(numOfMinutes);
}

//Add a snapshot function
function lapTimer(){
  let newEl = document.createElement('span');
  let msg = padTimer(numOfMinutes)+':'+padTimer(numOfSecs)+' ';
  let newText = document.createTextNode(msg);
  newEl.appendChild(newText);
  lap.appendChild(newEl);
   //lap.innerHTML = padTimer(numOfMinutes)+':'+padTimer(numOfSecs);
}

function padTimer(number){
  return number>9? number:'0'+number;
}
//Add event listener
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTimer);
