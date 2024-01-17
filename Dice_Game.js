let player1Score = 0;
let player2Score = 0;

function setPlayerNames() {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  login = document.getElementById("login");

  player1_name = document.getElementById("player1_name");
  player2_name = document.getElementById("player2_name");

  player1_name.innerHTML = player1;
  player2_name.innerHTML = player2;
  login.style = "display:none";
}

function rollDice() {
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var scoreDisplay = document.getElementById("scoreDisplay");

  var ran1 = Math.floor(Math.random() * 6) + 1;
  var ran2 = Math.floor(Math.random() * 6) + 1;

  img1.src = `dice${ran1}.png`;
  img2.src = `dice${ran2}.png`;

  if (ran1 > ran2) {
    player1Score++;
  } else if (ran1 < ran2) {
    player2Score++;
  } else {
    // It's a tie
    scoreDisplay.innerHTML = "It's a Tie!";
  }

  // Display scores only if it's not a tie
  if (scoreDisplay.innerHTML !== "It's a Tie!") {
    scoreDisplay.innerHTML = `Scores: ${player1Score} | ${player2Score}`;
  }
}

function reset() {
  var scoreDisplay = document.getElementById("scoreDisplay");
  player1_name = document.getElementById("player1_name");
  player2_name = document.getElementById("player2_name");

  scoreDisplay.innerHTML = "";
  player1_name.innerHTML = "";
  player2_name.innerHTML = "";
}
