// Winner : 19
//  17 too low
// 20 too high

let winningNumber = 19
let userGuess = prompt("Guess a number : ");

// prompt takes input from browser
console.log(typeof(+userGuess))

if(userGuess == winningNumber){
    alert("WINNER WINNER CHICKEN DINNER");
}else{
    if(userGuess < winningNumber){
       alert("TOOOO LOW !!!");
    }
    else{
        alert("TOO HIGH");
    }
}