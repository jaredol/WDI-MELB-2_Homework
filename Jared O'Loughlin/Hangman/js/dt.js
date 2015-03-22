var game = {
    MAX_GUESSES: 4,
    guessedLetters: [],
    secret:[],
    puzzle: [],

    wordList: ['pudding', 'cake', 'hotdog', 'cakepudding'],

    setSecret: function(){
        game.secret = _.sample(game.wordList).split('');
    },

    setPuzzle: function(){
        game.puzzle = Array(game.secret.length+1).join('_').split('');
    },

    guessesLeft: function(){
        return game.MAX_GUESSES - game.guessedLetters.length;
    },

    guess: function(letter){
        this.guessedLetters.push(letter);

        // work out the puzzle display
        _.each(this.secret, function (secretLetter, index) {
            if(secretLetter == letter) {
                this.puzzle[index] = letter;
            }
        }, this);
    },

    revealAnswer: function(){
        wordString.innerHTML = game.secret.join("");
        console.log(game.secret);
    },

    gameRefresh: function(){
        console.log("game refesh function");
        game.setSecret();
        game.setPuzzle();
        wordString.innerHTML = game.puzzle.join(" ");
        game.guessedLetters = []
        //game.MAX_GUESSES - game.guessedLetters.length;
        document.getElementById('lettersUsed').innerHTML = "";
    },


    giveUp: function(){
        var giveUpButton = document.getElementById('giveUpButton');
        giveUpButton.addEventListener('click', game.revealAnswer);
        // giveUpButton.addEventListener('click', function(){
        //     console.log("yo");
        // });

        //var msg = "Give Up?  hmmm OK the answe was " + game.revealAnswer();
    }



}

window.onload = function(){


    game.setSecret();
    game.setPuzzle();

    var wordString = document.getElementById('wordString');
    wordString.innerHTML = game.puzzle.join(" ");
    // Update guesses left
    var guessesLeft = document.getElementById('guessesLeft');
    guessesLeft.innerHTML = game.guessesLeft();
    
    // Update guessed letters
    document.getElementById('guessedLetters').innerHTML = game.guessedLetters;


    document.getElementById('letterField').addEventListener('keyup', function(event){
        

        if(event.keyCode === 13) {
            var inputValue = letterField.value;
            // make the guess
            game.guess(inputValue);
            // clear the input box
            this.value = "";
            // update guesses left
            guessesLeft.innerHTML = game.guessesLeft();
            //game.guessLeft
            // Update guessed letters
            document.getElementById('guessedLetters').innerHTML = game.guessedLetters;
            // Display correctly guessed letters
            wordString.innerHTML = game.puzzle.join(" ");

            // Once max-guesses have been reached.
            var sorryMsg = "Sorry the answer was:"; 
            if(game.guessesLeft() == 0){
                game.revealAnswer();

            }


        }


    });

}


// Give Up Btn
var giveUpButton = document.getElementById('giveUpButton');
giveUpButton.addEventListener('click', game.revealAnswer);

// Reset Btn
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', game.gameRefresh);


