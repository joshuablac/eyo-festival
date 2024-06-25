const game= document.querySelector(".firstbuto")
console.log(game)
let random=Math.trunc(Math.random()*20)+1
const questionMark=document.querySelector(".questionMark")
const startGuess=document.querySelector(".statGues")
const body=document.querySelector("body")
let score=20;
const firstScore= document.querySelector(".firstNo")

console.log(random)
game.addEventListener("click", ()=>{
    const guessMyNo = Number(document.querySelector(".inpute").value)
    console.log(guessMyNo)
    if(!guessMyNo){
startGuess.textContent="No number is supplied"
body.style.backgroundColor="black"
    }
    else if(guessMyNo===random){
        startGuess.textContent="Correct🤗😉"
        questionMark.textContent=guessMyNo
        body.style.backgroundColor="green"
    }
    else if(guessMyNo !== random) {
        if (score > 1) {
     guessMyNo > random ? displayMessage("Try a lesser Number😥"):displayMessage("Try a higher Number.😢")
     
     body.style.backgroundColor="maroon"
     score -=1;
     firstScore.textContent=score;
        }
        console.log(displayMessage())
    }

    /*if(guessMyNo>random){
        startGuess.textContent=""
       
    }
    else if(guessMyNo<random){
        startGuess.textContent=""
        
    }
*/
})