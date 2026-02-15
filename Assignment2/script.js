/*
Generate a random integer from 1 to 3,
map that value to "Scissors", "Rock", or "Paper",
and return the computer's selected option.
*/

function getComputerChoice(computerChoice){
    computerChoice = Math.floor(Math.random() * 3 + 1)
    if(computerChoice == 1){
        return "Scissors"
    }
    else if(computerChoice == 2){
        return "Rock"
    }
    else{
        return "Paper"
    }
}

/*
Select each button element from the DOM and attach
a click event listener that calls playRound with the
corresponding human choice.
*/

const rock = document.querySelector("#Rock");
rock.addEventListener("click", () => playRound("Rock"));

const paper = document.querySelector("#Paper");
paper.addEventListener("click", () => playRound("Paper"));

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => playRound("Scissors"));

/*
Maintain persistent game state across button clicks:
- humanScore tracks player wins
- computerScore tracks computer wins
- rounds counts how many rounds have been played

select the DOM element where round results
and scores will be displayed.
*/
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const scores = document.querySelector("#Scores");

/*
Run one round of the game whenever a button is clicked.

Process:
1. Log the human choice for debugging.
2. Generate the computer's choice.
3. Increment the round counter.
4. Determine the winner and update scores.
5. Display the round result and current score in the DOM.
6. After 5 rounds, replace the display with the final outcome.
*/
function playRound(humanChoice){
    console.log("Human chose:", humanChoice);
    const computerChoice = getComputerChoice();
    rounds++;
    let message;

    if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        message = "Congrats, you win the round!";
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        message = "Congrats, you win the round!";
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        message = "Congrats, you win the round!";
    }
    else if (humanChoice === computerChoice) {
        message = "Tie!";
    }
    else {
        computerScore++;
        message = "You lost the round!";
    }

    scores.textContent =
    `${message} | You: ${humanScore} - Computer: ${computerScore}`;
    
    if(rounds === 5){
        if(humanScore > computerScore){
        scores.textContent = "You did it!"
        }
    else 
    scores.textContent = "Better luck next time"
    }
}
