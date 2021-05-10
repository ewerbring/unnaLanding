function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let count = 0;
var logo = document.getElementById("logo");
var time = document.getElementById("time");
var time2 = document.getElementById("time2");

function startTime() {
  setInterval(function () {
    count += 1;
    console.log(count);
    time.style =
      "transform: rotate( " +
      count * 3 +
      "deg); transform-origin: center center ;;";
    time2.style =
      "transform: rotate( " +
      count * 3 +
      "deg); transform-origin: center center ;;";
  }, 1000);

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  // document.getElementById("time").innerHTML =
  // `<p id="timeText"> release in<br>` + h + ":" + m + ":" + s + `</p>`;
  // t = setTimeout(function () {
  //   startTime();
  // }, 500);

  sec = s;

  let timeText = document.getElementById("timeText");
  let innersignup = document.getElementById("innersignup");

  if (m % 2 == 0) {
    timeText.style = "transform: rotate( 180deg)";
    innersignup.style = "transform: rotate( 180deg)";
  } else {
    timeText.style = "transform: rotate( 0deg)";
    innersignup.style = "transform: rotate( 0deg)";
  }

  onmousemove = function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    logo.style =
      "transform: rotate( " +
      // sec * 10 +
      (mouseX + mouseY) / 3 +
      "deg); transform-origin: center center ;;";
  };
}

startTime();

function show1(x) {
  let word = document.getElementById(x);
  word.style.visibility = "visible";
}
function hide1(x) {
  let word = document.getElementById(x);
  setTimeout(function () {
    word.style.visibility = "hidden";
  }, 2500);
}
