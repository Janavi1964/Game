let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


let gencompScore=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    
}
const drawGame=()=>{
    msg.innerText="It's a draw . Play again!";
    msg.style.backgroundColor="rgb(237, 146, 146)";
};
const showWinner= (userWin, userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
};
const playGame=(userChoice)=>{
    console.log("user choice is ",userChoice);
    const compChoice=gencompScore();
    console.log("computer choice is ",compChoice);
    
    if(userChoice===compChoice){//if draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="rock"?true:false;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice , compChoice);
    }    
        
}

choices.forEach((choice)=>{
    console.log(choice);

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("the choice was clicked",userChoice);
        playGame(userChoice)
    });
});

