// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

let userChoice = "";
let computerChoice = "";
let winner = "";
let randomNumber = 0;

$("button").click(function() {
  randomNumber = Math.random();
  userChoice = $("input").val();
  $("#userChoice").text(userChoice);
  
  if (randomNumber > 0.8) {
    computerChoice = "paper";
  } else if (randomNumber > 0.2) {
    computerChoice = "rock";
  } else {
    computerChoice = "scissors";
  }
  
  $("#computerChoice").text(computerChoice)
  
});

