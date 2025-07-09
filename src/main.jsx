import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";

let seconds = 0;
let intervalID;
let root = createRoot(document.getElementById("root"));

function renderCounter() {
  root.render(
    <StrictMode>
      <Counter start={start} stop={stop} reset={reset} seconds={seconds} />
    </StrictMode>
  );
}

renderCounter();

function tick() {
  if (seconds != parseInt(document.querySelector("#input-alert").value)) {
    seconds++;
  } else {
    reset();
    alert("Time's up!");
    document.querySelector("#input-alert").value = null;
  }
  renderCounter();
}

function countdown() {
  if (seconds > 0) {
    seconds--;
  } else {
    reset();
    alert("Time's over!");
    document.querySelector("#input-countdown").value = null;
  }
  renderCounter();
}

function start() {
  //display seconds while counting down
  seconds =
    document.querySelector("#input-countdown").value == ""
      ? seconds
      : parseInt(document.querySelector("#input-countdown").value);

  //condition to count up or down
  intervalID =
    document.querySelector("#input-countdown").value == ""
      ? setInterval(tick, 1000)
      : setInterval(countdown, 1000);
}

function stop() {
  clearInterval(intervalID);
  intervalID = null;
}

function reset() {
  seconds = 0;
  clearInterval(intervalID);
  intervalID = null;
  renderCounter();
}
