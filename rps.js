function getComputerChoice() {
  var options = [
    "Rock",
    "Paper",
    "Scissors"
  ];

  var choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  var tie = "It's a tie";
  var lost = "You lose, oops";
  var win = "You win, yay :D";

  if (playerSelection == "rock") {
    if (computerSelection == "Rock") {
      return tie;
    } else if (computerSelection == "Paper") {
      return lost;
    } else if (computerSelection == "Scissors") {
      return win;
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "Rock") {
      return win;
    } else if (computerSelection == "Paper") {
      return tie;
    } else if (computerSelection == "Scissors") {
      return lost;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "Rock") {
      return lost;
    } else if (computerSelection == "Paper") {
      return win;
    } else if (computerSelection == "Scissors") {
      return tie;
    }
  }
}

function game() {
  let computerSelection;
  let player;

  for (let i = 0; i < 5; i++) {
    player = prompt("Rock, paper, or scissors?");
    computerSelection = getComputerChoice();
    console.log("You chose: " + player);
    console.log("Computer picked: " + computerSelection);
    console.log(playRound(player, computerSelection));
  }
}

game();


