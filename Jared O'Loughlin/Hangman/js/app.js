var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    word.secretWord = _.sample(word.wordList);
    
    // Insert dashes btw letters:
 
    var splitWord = Array(word.secretWord.length + 1).join("*");


    // Inject into DOM:
    var answer = document.getElementById('answer');
    answer.innerHTML = splitWord;
  },

  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){
        var arr1 = [];
        var arr2 = [];
        return 
  }
};




var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){},

  // Check if the player has won and end the game if so
  checkWin: function(wordString){},

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){}
};

var game = {
  // Resets the game
  resetGame: function(){},

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};



window.onload = function(){

  // Start a new game
  word.setSecretWord();

  // Replace word with dashes

  // events - keypressed keyup, keydown, change, click
  var input = document.getElementById('letterField');
  //input.addEventListener('keyup', doThis)

  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};