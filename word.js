var Letters = require("./letters");

var Word = function(word){

    this.letter = [];

    for(var i =0; i < word.length; i++){
        if(word.charAt(i) ===" "){
            this.letter.push(" ");
        }
        else{
            this.letter.push(new Letters(word.sharAt(i)));
        };
    };

    this.displayWord = function(){

        var hiddenWord = "";

        for(var i =0; i < this.letter.length; i++){
            if(this.letter[i].letter === null || this.letter[i].letter===undefined){
                hiddenWord+=" ";
            }
            else{
                hiddenWord += this.letter[i].displayLetter;
            };
        };
        return hiddenWord;
    };

    this.guessWord = function(tryLetter){

        for(var i=0; i< this.letter.length; i++){
            if(this.letter[i].letter !== undefined){
                this.letter[i].letterGuess(tryLetter);
            };
        };
    };
};

 module.exports =Word;