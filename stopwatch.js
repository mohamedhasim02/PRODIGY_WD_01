// JavaScript code for the stop watch
var stopwatch = document.getElementById("stopwatch");
var h1 = stopwatch.querySelector("h1");
var startButton = stopwatch.querySelector("#start");
var stopButton = stopwatch.querySelector("#stop");
var resetButton = stopwatch.querySelector("#reset");
var lapButton = stopwatch.querySelector("#lap");
var lapsList = stopwatch.querySelector("#laps");
var startTime;
var intervalId;

function startTimer() {
  startTime = Date.now();
  intervalId = setInterval(updateTimer, 10);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  h1.textContent = "00:00:00";
  lapsList.innerHTML = "";
}

function lapTimer() {
  var lapTime = formatTime(Date.now() - startTime);
  var lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

function updateTimer() {
  var elapsedTime = Date.now() - startTime;
  var formattedTime = formatTime(elapsedTime);
  h1.textContent = formattedTime;
}

function formatTime(time) {
  var date = new Date(time);
  var hours = date.getUTCHours().toString().padStart(2, "0");
  var minutes = date.getUTCMinutes().toString().padStart(2, "0");
  var seconds = date.getUTCSeconds().toString().padStart(2, "0");
  var milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
    .toString()
    .padStart(2, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", lapTimer);
