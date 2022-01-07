let scoreArray = [
  // Array, der ausgibt, ob der Score der jeweiligen Frage schon erzielt wurde. Anfangswert für jede Frage: "false"
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
function setScore1() {
  // Wird ausgeführt, nachdem der richtige Button von Frage 1 betätigt wird und ordnet den Array-Wert dieser Frage einem Bezeichner zu.
  localStorage.setItem("score1", scoreArray[0]);
  // Setzt in Kombination mit getScoreline() die Hintergrundfarbe des ersten Scoreline-Elements auf grün.
  localStorage.setItem("scoreline1", "green");
}
function setScore2() {
  localStorage.setItem("score2", scoreArray[1]);
  localStorage.setItem("scoreline2", "green");
}
function setScore3() {
  localStorage.setItem("score3", scoreArray[2]);
  localStorage.setItem("scoreline3", "green");
}
function setScore4() {
  localStorage.setItem("score4", scoreArray[3]);
  localStorage.setItem("scoreline4", "green");
}
function setScore5() {
  localStorage.setItem("score5", scoreArray[4]);
  localStorage.setItem("scoreline5", "green");
}
function setScore6() {
  localStorage.setItem("score6", scoreArray[5]);
  localStorage.setItem("scoreline6", "green");
}
function setScore7() {
  localStorage.setItem("score7", scoreArray[6]);
  localStorage.setItem("scoreline7", "green");
}
function setScore8() {
  localStorage.setItem("score8", scoreArray[7]);
  localStorage.setItem("scoreline8", "green");
}
function setScore9() {
  localStorage.setItem("score9", scoreArray[8]);
  localStorage.setItem("scoreline9", "green");
}
function setScore10() {
  localStorage.setItem("score10", scoreArray[9]);
  localStorage.setItem("scoreline10", "green");
}
function getScore() {
  scoreArray[0] = localStorage.getItem("score1"); // Setzt bei Ausführung den scoreArray-Wert von Frage 1 auf "null"
  scoreArray[1] = localStorage.getItem("score2");
  scoreArray[2] = localStorage.getItem("score3");
  scoreArray[3] = localStorage.getItem("score4");
  scoreArray[4] = localStorage.getItem("score5");
  scoreArray[5] = localStorage.getItem("score6");
  scoreArray[6] = localStorage.getItem("score7");
  scoreArray[7] = localStorage.getItem("score8");
  scoreArray[8] = localStorage.getItem("score9");
  scoreArray[9] = localStorage.getItem("score10");
  let result = 0; // Gibt den insgesamten Score an.
  for (let i = 0; i < scoreArray.length; i++) {
    // Iteriert durch den scoreArray und zählt die richtig beantworteten Fragen durch die Anzahl der Strings "null"
    if (scoreArray[i] === "null") {
      result += 1;
    }
  }
  document.getElementById("score").innerHTML = result; // Setzt den Score auf das Ergebnis der Iteration.

  // Setzt die Hintergrundfarbe der Scoreline-Elemente auf "grün", sobald dieder Wert im LocalStorage steht
  document.getElementById("scoreline1").style.background =
    localStorage.getItem("scoreline1");
  document.getElementById("scoreline2").style.background =
    localStorage.getItem("scoreline2");
  document.getElementById("scoreline3").style.background =
    localStorage.getItem("scoreline3");
  document.getElementById("scoreline4").style.background =
    localStorage.getItem("scoreline4");
  document.getElementById("scoreline5").style.background =
    localStorage.getItem("scoreline5");
  document.getElementById("scoreline6").style.background =
    localStorage.getItem("scoreline6");
  document.getElementById("scoreline7").style.background =
    localStorage.getItem("scoreline7");
  document.getElementById("scoreline8").style.background =
    localStorage.getItem("scoreline8");
  document.getElementById("scoreline9").style.background =
    localStorage.getItem("scoreline9");
  document.getElementById("scoreline10").style.background =
    localStorage.getItem("scoreline10");
}

function clickedWrong() {
  // function which changes the color of the background, border and text of the "wrong" buttons as one of them is clicked
  let x = document.getElementsByClassName("wrong");
  x[0].style.background = "red"; // Selects the first Element with class name = "wrong"
  x[0].style.border = "red";
  x[0].style.color = "white";
  x[1].style.background = "red";
  x[1].style.border = "red";
  x[1].style.color = "white";
  x[2].style.background = "red";
  x[2].style.border = "red";
  x[2].style.color = "white";
}
function clickedRight() {
  // function which changes the color of the background, border and text of the "right" button as soon as it is clicked
  let x = document.getElementsByClassName("right");
  x[0].style.background = "green";
  x[0].style.border = "green";
  x[0].style.color = "white";
  if (document.getElementById("score").innerHTML == 10) {
    x[0].innerHTML =
      "<a id = 'rewardLink' onclick = 'clearAll()'>Zur Belohnung</a>"; // Shows the reward link, if score equals 10
  }
}

function clearAll() {
  document.getElementById("content").innerHTML = ""; // Clears everything except the nav bar and the background-image
  document.getElementById("reward").style.visibility = "visible"; // Reveals the reward text
  let x = document.getElementById("reward1");
  x.style.animation = "typing 5s";
  x.style.animationFillMode = "forwards";
  x.style.overflow = "hidden";
  let y = document.getElementById("reward2");
  y.style.animation = "typing 5s";
  y.style.animationDelay = "5s";
  y.style.animationFillMode = "forwards";
  y.style.overflow = "hidden";
  y.style.width = "0px";
}
// Das DOMContentLoaded-Event wird ausgelöst, wenn das initiale HTML-Dokument vollständig geladen und geparst ist. Es wird dabei nicht auf Stylesheets, Bilder und Frames gewartet.
document.addEventListener("DOMContentLoaded", function (event) {
  getScore();
});

// Email-Validation
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
