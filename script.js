let breakTime = document.querySelector("#breakTime");
let sessionTime = document.querySelector("#sessionTime");
let cycle = document.querySelector("#cycle");
console.log(breakTime, sessionTime, cycle);
breakTime.textContent = "5 min";
sessionTime.textContent = "25 min";
let minutes = 25;
let seconds = "00";

/*setInterval(function(){ cycle.textContent = minutes +":" + seconds;
console.log(minutes +":" + seconds)
if (seconds === "00" || seconds == 0) {
    seconds = "59";
    minutes -= 1;
}
else seconds -= 1 }, 300);*/