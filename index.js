var Word = require("./word");
var inquirer = require("inquirer");
var $ = require("jquery");

var tvShows = ["arrested devlopment", "archer", "game of thrones", "parks and rec", ];

function start(){
    var hiddenShow = tvShows[Math.floor(Math.random()*tvShows.length)];

    var word = new Word(hiddenShow);

    wordGuess(word, hiddenShow);
    guessesLeft = 10;
}

function wordGuess(letterChoice, letterCorrect){

    var letters = [];
    var correctletter = [];

    console.log("\n"+letterChoice.dispalyWord());

    inquirer.prompt([
        {
            name: "guess",
            message: "Choose a letter",
            validate: function validateLetter(name){
                if(name.match(/[a-z]/i)){
                    console.log("Choose a letter");
                }
                else if(name.length > 1){
                    console.log("Only one letter at a time");
                } 
                else{
                    return true;
                }
            }
        }
    ]).then(function(answer){
        var letterGuessed = answer.guessLetter.toUppperCase();

        letterChoice.guessWord(letterGuessed);

        for(var i =0; i< letterChoice.letter.length; i++){
            letters.push(letterChoice.letter[i].letter);
            correctletter.push(letterChoice.letter[i].correct);
        }
        if(letters.indexOf(letterGuessed) > -1){
            console.log("\n Correct! \n"+guessesLeft+" guesses remainig");
        }
        else{
            guessesLeft --;
            console.log("\n Thats Wrong guess again \n"+ guessesLeft+" guesses remaining");
        }
        if (correctGuesses.indexOf(false) > -1 && chancesLeft > 0) {
            wordGuess(letterChoice, letterCorrect);
        }
        else {
            if (chancesLeft === 0) {
                console.log("Sorry, you lose!");
                console.log("\n ANSWER: " + letterCorrect);
                
            }
            else {
                console.log("You won!");
                console.log("\n ANSWER: " + letterCorrect);
            };
        inquirer.prompt([
            {
                name:"tryAgain",
                message: "Try again? y or n"
            }
        ]).then(function(answer){
            if(answer.tryAgain === y){
                start();
            }
            else{
                return;
            }
        })
    }
    });
}
start();