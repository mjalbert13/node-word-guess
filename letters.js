var Letter = function(letter){

    this.letter = letter;

    this.right = false;

    this.displayLetter = function(){
        if(this.right){
            return this.letter+" ";
        }
        else{
            return " _";
        };
    };

    this.letterGuess = function(guess){
        if(guess === this.letter){
            this.right = true;
        };
    };


};

module.exports = Letter;