let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScrPara = document.querySelector("#user-score");
const compScrPara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper,scissors
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game is draw. Play again";
    msg.style.backgroundColor = "#0D1321";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScrPara.innerText = userScore;
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScrPara.innerText = compScore;
        msg.innerText = "You Lost!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});