let breakTime = document.querySelector("#breakTime");
let sessionTime = document.querySelector("#sessionTime");
let cycle = document.querySelector("#cycle");
let increaseSession = document.querySelector("#increaseSession");
let decreaseSession = document.querySelector("#decreaseSession");
let increaseBreak = document.querySelector("#increaseBreak");
let decreaseBreak = document.querySelector("#decreaseBreak");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let stop = document.querySelector("#stop");
let restart = document.querySelector("#restart");
increaseSession.addEventListener("click", (e) => {
    if (session < 60) {
        session += 1;
    }
    updateSessionTime();
    updateClock();
});
decreaseSession.addEventListener("click", (e) => {
    if (session > 5) {
        session -= 1;
    }
    updateSessionTime();
    updateClock();
});
increaseBreak.addEventListener("click", (e) => {
    if (rest < 30) {
        rest += 1;
    }
    updateBreakTime();
});
decreaseBreak.addEventListener("click", (e) => {
    if (rest > 1) {
        rest -= 1;
    }
    updateBreakTime();
});
console.log(breakTime, sessionTime, cycle);
let session = 25;
let rest = 5;

let seconds = "00";
function updateBreakTime() {
    breakTime.textContent = rest + " min";
}
updateBreakTime();
function updateSessionTime() {
    sessionTime.textContent = session + " min";
}
updateSessionTime();
function updateClock() {
    cycle.textContent = session + ":" + seconds;
}
updateClock();

/*setInterval(function(){ cycle.textContent = minutes +":" + seconds;
console.log(minutes +":" + seconds)
if (seconds === "00" || seconds == 0) {
    seconds = "59";
    minutes -= 1;
}
else seconds -= 1 }, 300);*/