function calculateSum(a, b){
    let rezultat = a + b;
    return rezultat;
}

let sum1 = calculateSum(6, 9);
let sum2 = calculateSum(8, 4);

console.log(sum1, sum2);

let student = {
    name: "Nikita",
    age: 18,
    grade: 11,

    introduce: function (){
        console.log("Sunt " + this.name + " si am " + this.age + " ani.");
    }
};

console.log(student.grade);
student.introduce();

student.grade = 12;
console.log(student.grade);


let rock = document.getElementById("rock-btn");
let scissor = document.getElementById("scissor-btn");
let paper = document.getElementById("paper-btn");

let playerChoice = document.getElementById("player-choice");
let compChoice = document.getElementById("comp-choice");

let rezultat = document.getElementById("rezultat");

let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");
let drawScore = document.getElementById("draw");
let totalRound = document.getElementById("total-rounds");

let isWinning = document.getElementById("winning");
let winnerText = document.getElementById("winner");

let newGameButton = document.getElementById("new-game");

let move = ["piatra", "foarfeca", "hartie"];

function getComputerChoice(){
    let index = Math.floor(Math.random()* 3);
    return move[index];
}

let gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function () {
        alert("Player: " + this.player + "\nCalculator: " + this.computer + "\nEgalitati: " + this.draws);
    }
};

function determineWinner(playerMove, compMove){
    if (playerMove === compMove){
        gameScore.draws = gameScore.draws + 1;
        return "Egalitate";
    } else if (playerMove === "piatra" && compMove === "foarfeca" || playerMove === "foarfeca" && compMove === "hartie" || playerMove === "hartie" && compMove === "piatra"){
        gameScore.player = gameScore.player + 1;
        return "Ai castigat";
    } else {
        gameScore.computer = gameScore.computer + 1;
        return "Calculatorul a castigat";
    }
}

function checkFinalWinner(){
    if(gameScore.player == 5){
        alert("A castigat Player!");
        winnerText.textContent = "Player";
        rock.disabled = true;
        scissor.disabled = true;
        paper.disabled = true;
    } else if(gameScore.computer == 5){
        alert("A castigat computer!");
        winnerText.textContent = "Computer";
        rock.disabled = true;
        scissor.disabled = true;
        paper.disabled = true;
    }
}

function playRound(playerMove){
    let compMove = getComputerChoice();
    let result = determineWinner(playerMove, compMove);

    playerChoice.textContent = playerMove;
    compChoice.textContent = compMove;
    rezultat.textContent = result;

    gameScore.displayScore();

    playerScore.textContent = gameScore.player;
    compScore.textContent = gameScore.computer;
    drawScore.textContent = gameScore.draws; 

    if(gameScore.player > gameScore.computer){
        isWinning.textContent = "Player";
    } else if(gameScore.player < gameScore.computer){
        isWinning.textContent = "Computer";
    } else {
        isWinning.textContent = "Egalitate";
    }

    let total = gameScore.player + gameScore.computer + gameScore.draws;
    totalRound.textContent = total;

    let finalWinner = checkFinalWinner();
}

function resetGame(){
    gameScore.player = 0;
    gameScore.computer = 0;
    gameScore.draws = 0;

    playerScore.textContent = 0;
    compScore.textContent = 0;
    drawScore.textContent = 0;
    totalRound.textContent = 0;

    playerChoice.textContent = "-";
    compChoice.textContent = "-";
    rezultat.textContent = "-";
    isWinning.textContent = "-";
    winnerText.textContent = "-";

    rock.disabled = false;
    scissor.disabled = false;
    paper.disabled = false;
}

rock.addEventListener("click", function(){
    playRound("piatra");
});

scissor.addEventListener("click", function(){
    playRound("foarfeca");
});

paper.addEventListener("click", function(){
    playRound("hartie");
});

newGameButton.addEventListener("click", function(){
    resetGame();
});