var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesArray = [];
var secretWord = ["m","a","d","o","n","n","a"];
var workingWord = ["_","_","_","_","_","_","_"];


document.onkeydown = function(event) {

    var keyPressed = event.key.toLowerCase();
    // guessesArray.push(" " + keyPressed);
    var guessIndex = secretWord.indexOf(keyPressed);

    if (guessIndex < 0) {
        guessesArray.push(keyPressed);
    }

    for (i = 0; )



    if (keyPressed === compChoice) {
        wins++;
        guessesLeft = 8;
        guessesArray = [];
    }
    
    else {
        guessesLeft--;
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 8;
            guessesArray = [];
        };
    };

    
    document.querySelector("#winsText").innerHTML = "Wins: " + wins;
    document.querySelector("#lossesText").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeftText").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#guessesArrayText").innerHTML = guessesArray;

};