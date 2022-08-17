/* FUNCTIONS */

// this function returns a random choice for the adversary(computer)
function computerPlay() {

    let options = ['Rock', 'Paper', 'Scissors'];

    let sortedOption = Math.floor(Math.random() * options.length);

    // returning the sorted element according to the sorted number
    if (options[sortedOption]) {
        return options[sortedOption].toLowerCase();
    }
}

// making the images and score appear on the screen according the player's choice
function returnRock() {   
    link.getAttribute("xlink:href");
    link.setAttribute("xlink:href", "#icon-rock");
    playerComputer = computerPlay();
    returnComputerChoice(playerComputer);
    console.log("you chose rock"); 
    game(playRound("rock", playerComputer));
    returnScore();
}

function returnPaper() {
    link.getAttribute("xlink:href");
    link.setAttribute("xlink:href", "#icon-hand");
    playerComputer = computerPlay();
    returnComputerChoice(playerComputer);
    console.log("you chose paper");
    game(playRound("paper", playerComputer));
    returnScore();
}

function returnScissors() {
    link.getAttribute("xlink:href");
    link.setAttribute("xlink:href", "#icon-scissors");
    playerComputer = computerPlay();
    returnComputerChoice(playerComputer);
    console.log("you chose scissors");
    game(playRound("scissors", playerComputer));
    returnScore();
}

// function to show the current score on the screen
function returnScore() {
    document.getElementById("score-computer").innerHTML = newScoreComputer;
    document.getElementById("score-player").innerHTML = newScorePlayer;
}

// making the element image appear according the computer's choice
function returnComputerChoice(computerChoice) {
    if (computerChoice == "rock") {
        linkComputer.getAttribute("xlink:href");
        linkComputer.setAttribute("xlink:href", "#icon-rock");
        console.log("computer chose rock");
    } else if (computerChoice == "paper") {
        linkComputer.getAttribute("xlink:href");
        linkComputer.setAttribute("xlink:href", "#icon-hand");
        console.log("computer chose paper");
    } else if (computerChoice == "scissors") {
        linkComputer.getAttribute("xlink:href");
        linkComputer.setAttribute("xlink:href", "#icon-scissors");
        console.log("computer chose scissors");
    }
}

// function to play one round and set new scores
function playRound(playerOne, playerTwo) {

    if (playerOne == "paper" && playerTwo == "scissors") {
        newScoreComputer++;
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("You Lose! Scissors cuts paper.");
        document.getElementById("message").innerHTML = "You Lose! Scissors cuts paper."
    } else if ( playerOne == "scissors" && playerTwo == "rock") {
        newScoreComputer++;
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("You Lose! Rock breaks scissors.");
        document.getElementById("message").innerHTML = "You Lose! Rock breaks scissors.";
    } else if ( playerOne == "rock" && playerTwo == "paper") {
        newScoreComputer++;
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("You Lose! Paper covers rock.");
        document.getElementById("message").innerHTML = "You Lose! Paper covers rock.";
    } else if ( playerOne == "paper" && playerTwo == "rock") {
        newScorePlayer++;
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("You Win! Paper covers rock.");
        document.getElementById("message").innerHTML = "You Win! Paper covers rock.";
    } else if ( playerOne == "scissors" && playerTwo == "paper") {
        newScorePlayer++;
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("You Win! Scissors cuts paper.");
        document.getElementById("message").innerHTML = "You Win! Scissors cuts paper."
    } else if ( playerOne == "rock" && playerTwo == "scissors") {
        newScorePlayer++;
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("You Win! Rock breaks scissors.")
        document.getElementById("message").innerHTML = "You Win! Rock breaks scissors."
    } else if ( playerOne == playerTwo) {
        round++;
        console.log(`player: ${newScorePlayer} x computer: ${newScoreComputer}`);
        console.log("Oh, it's a tie!")
        document.getElementById("message").innerHTML = "Oh, it's a tie!"
    } else {
        console.log("You can only choose paper, scissors or rock");
        document.getElementById("message").innerHTML = "You can only choose paper, scissors or rock";
    }
        
}

// necessary for reload game after the score 5 has been achived
function reloadGame () {    

    setTimeout(function() {
        window.location.reload(1);
    }, 2000);

}

// main function to start the game 
function game (func) {

    func     

    document.getElementById("round").innerHTML = `ROUND ${round}`;

    if (newScoreComputer >= 5) {
        
        document.getElementById("message").innerHTML = "Oh no, computer is the winner...";

        reloadGame();
        
    } else if (newScorePlayer >= 5) {
        
        document.getElementById("message").innerHTML = "CONGRATULATIONS! You are the WINNER!";

        reloadGame();

    } 
 
} 

/* VARIABLES */

// getting html elements
const rock = document.getElementById("rock-button");

const paper = document.getElementById("paper-button");

const scissors = document.getElementById("scissors-button");

let link = document.getElementById("player-choice");

let linkComputer = document.getElementById("computer-choice");

// setting inital scores, choices and round
let newScoreComputer = 0;

let newScorePlayer = 0;

let playerSelection = '';

var playerComputer = '';

let round = 0;

// listening events to return images according to the pressed button
rock.addEventListener("click", returnRock)

paper.addEventListener("click", returnPaper);

scissors.addEventListener("click", returnScissors);