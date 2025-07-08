import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";

let seconds = 0;
let intervalID;
let root = createRoot(document.getElementById("root"));

function renderCounter() {
  root.render(
    <StrictMode>
      <Counter
        start={start}
        stop={stop}
        reset={reset}
        seconds={seconds}
      />
    </StrictMode>
  );
}

renderCounter();

function tick() {
  seconds++;
  renderCounter();

  //display alert
  if (seconds == parseInt(document.querySelector("#input-alert").value)) {
    alert("Time's up!");
    reset();
    document.querySelector("#input-alert").value = null;
  }
}

function countdown() {
  seconds--;
  renderCounter();

  //display alert
  if (seconds == 0) {
    alert("Time's over!");
    reset();
    document.querySelector("#input-countdown").value = null;
  } 
}

function start() {
  //condition to count up or down
  intervalID =
    document.querySelector("#input-countdown").value == ""
      ? setInterval(tick, 1000)
      : setInterval(countdown, 1000);

  //display seconds while counting down
  seconds =
    document.querySelector("#input-countdown").value == ""
      ? seconds
      : parseInt(document.querySelector("#input-countdown").value); 
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
