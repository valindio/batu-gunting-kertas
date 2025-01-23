let humanScore = 0;
let computerScore = 0;

const gameplay = function playGame() {
  for (let i = 0; i <= 5; i++) {
    console.log("Score: " + humanScore + " : " + computerScore);
    const humanSelection = human();
    const computerSelection = computer();
    play(humanSelection, computerSelection);
  }
};

const play = function playRound(humanChoice, computerChoice) {
  if (humanChoice === "batu" && computerChoice === "kertas") {
    computerScore += 1;
    return console.log("Kamu kalah! batu kalah dengan kertas.");
  }

  if (humanChoice === "batu" && computerChoice === "gunting") {
    humanScore += 1;
    return console.log("Kamu menang! batu menang dengan gunting.");
  }

  if (humanChoice === "batu" && computerChoice === "batu") {
    return console.log("Seri! silahkan ulangin lagi.");
  }

  if (humanChoice === "kertas" && computerChoice === "batu") {
    humanScore += 1;
    return console.log("Kamu menang! kertas menang dengan batu.");
  }

  if (humanChoice === "kertas" && computerChoice === "gunting") {
    computerScore += 1;
    return console.log("Kamu kalah! kertas kalah dengan gunting.");
  }

  if (humanChoice === "kertas" && computerChoice === "kertas") {
    return console.log("Seri! silahkan ulangin lagi.");
  }

  if (humanChoice === "gunting" && computerChoice === "kertas") {
    humanScore += 1;
    return console.log("Kamu menang! gunting menang dengan kertas.");
  }

  if (humanChoice === "gunting" && computerChoice === "batu") {
    computerScore += 1;
    return console.log("Kamu kalah! gunting kalah dengan batu.");
  }

  if (humanChoice === "gunting" && computerChoice === "gunting") {
    return console.log("Seri! silahkan ulangin lagi.");
  }
};

const computer = function getComputerChoice() {
  const randomNumber = Math.random() * 10;
  const integerNumber = randomNumber.toFixed(0);
  if (integerNumber <= 3) {
    return "batu";
  } else if (integerNumber <= 6) {
    return "kertas";
  } else {
    return "gunting";
  }
};

const human = function getHumanChoice() {
  const result = prompt("Apa Pilihan mu?");
  return result.toLowerCase();
};

gameplay();
