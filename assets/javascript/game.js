



//declare variables and arrays
var answers = ["virginia", "texas", "chair"];
var wins = 0;
var randomWord = answers[Math.floor(Math.random() * answers.length)];
var guessesLeft = 10;
var guess = [];
var underscores = [];

//converts random word into underscores
for(i = 0; i < randomWord.length; i++) {
    		underscores = underscores + "_ "
		}
document.getElementById("word").innerHTML = underscores;
console.log(underscores)

console.log(randomWord)

 document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();

        //converts the computers random word from string to array
        var computerWord = randomWord.split('');
		var newUnderscores = underscores.split('');

		
        //cycles through word to see if user guessed correct letter
        for (i = 0; i < computerWord.length; i++) {

        	if (letter === computerWord[i]) {

        	
        	newUnderscores.splice(i, i, letter);
        	console.log(newUnderscores)
        	
        	console.log(underscores[i])
          	document.getElementById("word").innerHTML = newUnderscores.join(" ");
  			        
        	} 
        	
        }
        //if letter has already been guessed it prevents anything from happening
        for (i = 0; i < guess.length; i++) {

        	if (letter === guess[i]) {
          	return
          
        	}
        }




        //puts the users guess in the guess array and displays it
        guess.push(letter);
        document.getElementById("alreadyGuessed").innerHTML = guess;
        	
        

        //subtracts the guesses left for user & displays guesses left on screen
        guessesLeft--;
        document.getElementById("guessLeft").innerHTML = guessesLeft;
        
       	
       	

        }


