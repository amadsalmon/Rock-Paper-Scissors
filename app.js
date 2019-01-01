let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");

const scoreBoard_div = document.querySelector(".scoreBox");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = convertToLetter(userChoice) + " beats " + convertToLetter(computerChoice) + ". You win!";

    document.getElementById(userChoice).classList.add('greenGlow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('greenGlow');},300)
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = convertToLetter(computerChoice) + " beats " + convertToLetter(userChoice) + ". You lose...";

    document.getElementById(userChoice).classList.add('redGlow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('redGlow');},300)
}
function draw(userChoice){
    result_div.innerHTML = "It's a draw...";

    document.getElementById(userChoice).classList.add('greyGlow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('greyGlow');},300)
}

function convertToLetter(letter){
    switch(letter){
        case 'r':
            return "Rock";
            break;
        case 'p':
            return "Paper";
            break;
        case 's':
            return "Scissors";
            break;
    }
}


function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    
    }
}
function main(){
    rock_div.addEventListener('click',function(){game('r')});
    paper_div.addEventListener('click',function(){game('p')});
    scissors_div.addEventListener('click',function(){game('s')});
}

main();
