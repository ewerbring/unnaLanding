function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  // document.getElementById("time").innerHTML =
  // `<p id="timeText"> release in<br>` + h + ":" + m + ":" + s + `</p>`;
  t = setTimeout(function () {
    startTime();
  }, 500);
  var time = document.getElementById("time");
  var logo = document.getElementById("logo");

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
  time.style =
    "transform: rotate( " +
    sec * 3 +
    "deg); transform-origin: center center ;;";

  onmousemove = function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    logo.style =
      "transform: rotate( " +
      // sec * 10 +
      (mouseX + mouseY) / 3 +
      "deg); transform-origin: center center ;;";
  };
  signup.style =
    "transform: rotate(" +
    (sec + 250) * 6 +
    "deg); transform-origin: center center ;;";
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
