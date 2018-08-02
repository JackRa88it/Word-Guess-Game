var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesArray = [];
var secretWord = ["m","a","d","o","n","n","a"];
var workingWord = ["_","_","_","_","_","_","_"];

document.querySelector("#workingWordText").innerHTML = workingWord;

document.onkeydown = function(event) {

    var keyPressed = event.key.toLowerCase();
    var guessIndex = secretWord.indexOf(keyPressed);

    if (guessIndex < 0) {
        guessesArray.push(keyPressed);
        guessesLeft--;
    }

    else {        
        for (i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === keyPressed) {
                workingWord[i] = keyPressed;
            };
        }
    };


    document.querySelector("#workingWordText").innerHTML = workingWord;
    document.querySelector("#winsText").innerHTML = "Wins: " + wins;
    document.querySelector("#lossesText").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeftText").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#guessesArrayText").innerHTML = guessesArray;

};