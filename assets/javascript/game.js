var wins = 0;
var losses = 0;
var guessesLeft = 10;
var badLettersArray = [];
var wordList = ["monkey","scumm","banana","pirate","ghost","sword","grog","island","curse","guybrush","acetone","ship","sail","skeleton","skull","accounting","mansion","meat","fish","seagull","cannibal","voodoo","prisoner","voyage","sheriff","prosthetic","rubber","chicken"]
var music = new Audio("assets/audio/05 - Following The Shop Keeper.mp3");
music.loop = true;
var yesSound = new Audio("assets/audio/sfx_coin_double1.m4a");
var noSound = new Audio("assets/audio/sfx_exp_various3.m4a");
var winSound = new Audio("assets/audio/sfx_sounds_fanfare3.m4a");
var loseSound = new Audio("assets/audio/sfx_sounds_error3.m4a");
// initialize first word
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var secretWord = randomWord.split("");
var workingWord = [];

secretWord.forEach(function(){
    workingWord.push("_");
});

var workingWordDisp = workingWord.join(" ");
document.querySelector("#workingWordDisp").innerHTML = workingWordDisp;

document.onkeydown = function(event) {

    document.querySelector("#startMsg").style.color = "#000";
    music.play();
    // grab key pressed and make lowercase
    var keyPressed = event.key.toLowerCase();
    var guessIndex = secretWord.indexOf(keyPressed);
    var guessedAlready = badLettersArray.indexOf(keyPressed);

    // check if letter has already been guessed, then do nothing
    if (guessedAlready >= 0) {
    }

    // if guess is wrong, update guessesLeft and badLettersArray
    else if (guessIndex < 0) {
        badLettersArray.push(keyPressed);
        guessesLeft--;
        if (guessesLeft > 0){
            noSound.pause();
            noSound.currentTime = 0;
            noSound.play();
        };
    }

    // if right, replace underscores with correct letters
    else {
        for (i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === keyPressed) {
                workingWord[i] = keyPressed;
            };
        };
        if (workingWord.indexOf("_") >= 0){
            yesSound.pause();
            yesSound.currentTime = 0;
            yesSound.play();
        };
    };

    // check if word is complete or guesses spent, then reset game

    if (workingWord.indexOf("_") < 0) {
        winSound.play();
        wins++;
        guessesLeft = 10;
        badLettersArray = [];
        // pick new random word
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        secretWord = randomWord.split("");
        workingWord = [];
        
        secretWord.forEach(function(){
            workingWord.push("_");
        });        
    }

    else if (guessesLeft === 0) {
        loseSound.play();
        losses++;
        guessesLeft = 10;
        badLettersArray = [];
        // pick new random word
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        secretWord = randomWord.split("");
        workingWord = [];
        
        secretWord.forEach(function(){
            workingWord.push("_");
        });
    };

    // update display after each key press
    workingWordDisp = workingWord.join(" ");
    document.querySelector("#workingWordDisp").innerHTML = workingWordDisp;
    document.querySelector("#winsDisp").innerHTML = "Wins: " + wins;
    document.querySelector("#lossesDisp").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeftDisp").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#badLettersArrayDisp").innerHTML = badLettersArray;

};