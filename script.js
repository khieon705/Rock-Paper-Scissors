function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10) % 3 + 1;

    switch (computerChoice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissor";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock-Paper-Scissor", "");

    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        humanSelection = humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1);
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        playRound(humanSelection, computerSelection);
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "Rock" && computerChoice == "Scissor") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissor" && computerChoice == "Paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else if (humanChoice == computerChoice) {
            console.log("Draw");
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }
}

playGame();