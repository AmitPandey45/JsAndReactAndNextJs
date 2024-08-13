console.time("myTimer");
for (let i = 0; i < 100; i++) {
  console.log("Hello " + i);
}
console.timeEnd("myTimer");

console.time("secondTimer");

var timerId;

function startTimer(fromSeconds) {
  let remainingSeconds = fromSeconds;
  console.log("===Timer Started===");
  console.log("Remaining Time (in second): ");
  timerId = setInterval(() => {
    console.log(remainingSeconds);
    remainingSeconds -= 1;

    if (remainingSeconds === 0) {
        stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  console.timeEnd("secondTimer");
}

startTimer(10);
